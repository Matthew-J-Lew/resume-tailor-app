import { PrismaClient } from '@prisma/client'
import { OpenAI } from 'openai'

const prisma = new PrismaClient()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Tailor a LaTeX resume based on a job description and structured resume data
export async function POST(req) {
  try {
    // Extract input from the request
    const { latexCode, jobDescription, instructions } = await req.json()

    // Fetch all resume data from the database in a single transaction
    const [skills, education, experience, projects] = await prisma.$transaction([
      prisma.skill.findMany(),
      prisma.education.findMany(),
      prisma.experience.findMany(),
      prisma.project.findMany(),
    ])

    // Package structured data to provide context to the AI
    const structuredData = {
      skills,
      education,
      experience,
      projects,
    }

    // Construct the prompt sent to OpenAI with clear instructions and all input data
    const prompt = `
      You are a professional resume editor. The user has input a LaTeX resume and a job description.

      You are to analyze the resume and job description and make edits that would make the resume most relevant to the job description and increase the user's chances of getting an interview.

      You are also given structured resume data from a database. Use it to surface stronger or more relevant examples if they aren't already in the LaTeX. Avoid fabrication. Focus on using real experience and skills, even if it means substituting stronger material from the database.

      Follow these rules:
      - Output the tailored resume as valid LaTeX code, maintaining the same general structure, formatting, and visual style as the original.
      - Your output should not include any markdown or additional comments.
      - Do not fabricate skills. Only adjust content that is actually part of the user's database or original LaTeX.
      - Prioritize content that is most relevant to the job description, and then content that is most in-demand and desirable.
      - You may make minor adjustments to wording to better match the job description or improve ATS compatibility.
      - You may reorder and use content to highlight the most relevant experiences and skills.
      - Be sure to keep in mind how some technologies could relate or be adjacent to each other (for example knowing java -> OOP concepts, or knowing Rust -> C/C++)
      - For Experience and Projects, you do not need to include every bullet point in the database you can pick and choose the most appropriate ones for the posting.
      - For the soft skills field you may add any soft skills that are mentioned in the posting even if they are not in the original resume or database.
      - Ensure the final resume fits on one page.
      - Ensure the final resume fills the page, it should not be only 75% filled.

      Here are some general guidelines for the length of certain fields, exceptions for length can be made if necessary to fit a posting:
      - Relevant Coursework: 4-6 entries
      - Programming Languages: 5-8 entries
      - Database: 4-6 entries
      - Other: 4-6 entries
      - Soft Skills: 4-6 entries
      - Projects: 2-3 entries

      --- LaTeX Resume ---
      ${latexCode}

      --- Job Description ---
      ${jobDescription}

      --- Structured Resume Data (for reference only) ---
      ${JSON.stringify(structuredData, null, 2)}

      --- Special Instructions ---
      ${instructions || 'None provided'}
      `

    // Request the tailored resume from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // Use GPT-4o for best performance
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.4, 
      max_tokens: 3000,
    })

    // Extract the model's response 
    const suggestions = completion.choices[0]?.message?.content || 'No suggestions returned.'

    // Return the tailored LaTeX resume
    return new Response(JSON.stringify({ output: suggestions }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error tailoring LaTeX resume:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
