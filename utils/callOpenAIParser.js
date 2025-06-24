import OpenAI from 'openai'

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Sends raw resume text to OpenAI to parse into structured JSON matching our DB schema
export async function sendToOpenAI(resumeText) {
  // Construct prompt for OpenAI with instructions on JSON output and schema details
  const prompt = `
    You are a resume parsing assistant. Convert the following resume text into structured JSON that matches the database schema described below. Respond with only the JSON (no code block, no commentary). The format must be valid JSON parsable by JSON.parse() — do not include any markdown or explanations.

    For each job:
    - If there are no sub-projects, return a single object with bullets under "bullets", and "isProject": false.
    - If a job includes internal projects, return the main job with "isProject": false and list the projects separately with:
      - "isProject": true
      - project name under "jobTitle"
      - relevant technologies (if any)
      - unique bullets for each project

    You must use the fields exactly as described below.

    ONLY GENERATE JSON DATA FOR THE TABLES WRITTEN BELOW:
    Here is the relevant database schema:

    education:
    - degree
    - school_name
    - gpa
    - start_date
    - end_date
    - awards (list of strings)
    - relevant_courses (list of strings)

    skills:
    - name
    - type 

    experience:
    - jobTitle
    - companyName
    - startDate
    - endDate
    - location (optional)
    - isProject (true/false)
    - bullets (list of strings)
    - technologies (list of strings, optional — only if isProject = true)

    projects:
    - projectName
    - bullets (list of strings)
    - technologies (list of strings)
    - startDate
    - endDate
    - githubUrl

    Resume:
    ${resumeText}

    `

  // Send prompt to OpenAI GPT-4o model with low temperature for consistency
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  })

  // Extract raw content from the response
  const content = completion.choices[0].message.content
  console.log('OpenAI RAW:', content)

  try {
    // Try to extract JSON from possible markdown code block wrappers
    const match = content.match(/```json\s*([\s\S]+?)```/) || content.match(/```([\s\S]+?)```/)
    const jsonText = match ? match[1] : content

    // Parse the extracted text as JSON and return it
    return JSON.parse(jsonText)
  } catch (err) {
    // If parsing fails, log errors and return an error object
    console.error('Failed to parse OpenAI response:', err)
    console.error('Raw content from OpenAI:', content)
    return { error: 'Could not parse response' }
  }
}
