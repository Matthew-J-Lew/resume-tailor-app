import { PrismaClient } from '@prisma/client'
import { OpenAI } from 'openai'

const prisma = new PrismaClient()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req) {
  try {
    const { latexCode, jobDescription, instructions } = await req.json()

    // Fetch structured resume data from the database
    const [skills, education, experience, projects] = await prisma.$transaction([
      prisma.skill.findMany(),
      prisma.education.findMany(),
      prisma.experience.findMany(),
      prisma.project.findMany(),
    ])

    const structuredData = {
      skills,
      education,
      experience,
      projects,
    }

    const prompt = `
You are a professional cover letter editor. 

The user is to input a job description.

The user will also do one of the following:
1. Input a LaTeX cover letter
2. Input a Plaintext cover letter

Your goal is to tailor the cover letter to best match the job description and increase the user's chances of landing an interview.

You are also given structured resume data from a database. Use this data to surface stronger or more relevant experience or skills, especially if they are not mentioned in the original cover letter. Avoid fabrication — only use what's available from the given cover letter and database.

Follow these rules:
- Maintain the format of the input, if plain text is submitted then maintain plaintext, but if LaTeX is submitted then maintain the same structure, formatting, and visual style and output valid LaTeX code.
- Your output should not contain any markdown or additional comments
- Use persuasive but professional language aligned with industry standards, however you are supposed to act as a human, do not behave like an ai model too much or be overly verbose, be formal but still human. 
- You may make minor changes to wording or reorganize sections to highlight strenghts and align with the job description.
- Do not rewrite the entire resume, your goal is to imitate the user's style as much as possible.
- You may take the provided database data such as projects or job experience and reword it to be used in the cover letter.
- If the user has applicable projects or work experience from the database, you may substitute or reference them if they are more relevant than what's currently in the cover letter.
- You may add soft skills or language from the job description if relevant, but do not fabricate specific experiences or technologies not mentioned in the resume or database.
- Keep the letter to one page.

In the event that the user does not submit a cover letter, then you may write them one based on the following guidelines:
- Use the user's database data to create a cover letter.
- Keep the tone formal but not overly verbose, the goal is to sound human and not like an AI; if possible use similar tone and wording as the given experience and project descriptions.
- Try to have this general format, you may make exceptions if necessary to fit the job description:
    - Date, Company name, Location of job, RE: Job posting, 
    - Introductory paragraph
    - Paragraph with example of technical experience
    - Paragraph with example of soft skill experience
    - Conclusion paragraph with contact information  
- Generally there should be around 4 paragraphs and fit on one page, if you do not have necessary data like contact information be sure to put placeholder text such as PHONE NUMBNER and EMAIL in all caps for the user to substitute.

--- Cover Letter ---
${latexCode}

--- Job Description ---
${jobDescription}

--- Structured Resume Data (for reference only) ---
${JSON.stringify(structuredData, null, 2)}

--- Special Instructions ---
${instructions || 'None provided'}
`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.4,
      max_tokens: 3000,
    })

    const suggestions = completion.choices[0]?.message?.content || 'No suggestions returned.'

    return new Response(JSON.stringify({ output: suggestions }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error tailoring LaTeX cover letter:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
