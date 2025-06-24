// /utils/openaiParser.js
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function sendToOpenAI(resumeText) {
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

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  })

  const content = completion.choices[0].message.content
  console.log('OpenAI RAW:', content)


  try {
    // Attempt to extract JSON if wrapped in ```json ... ```
    const match = content.match(/```json\s*([\s\S]+?)```/) || content.match(/```([\s\S]+?)```/)
    const jsonText = match ? match[1] : content

    return JSON.parse(jsonText)
  } catch (err) {
    console.error('Failed to parse OpenAI response:', err)
    console.error('Raw content from OpenAI:', content)
    return { error: 'Could not parse response' }
  }
}
