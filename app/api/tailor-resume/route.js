import { OpenAI } from 'openai'

export async function POST(req) {
  const formData = await req.formData()
  const file = formData.get('resume')
  const job = formData.get('job')

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // ⬇ Dynamically import at runtime
  const { default: pdfParse } = await import('pdf-parse')

  const parsed = await pdfParse(buffer)
  const resumeText = parsed.text

  const prompt = `
You are a professional resume editor. Compare the following resume and job description. Provide a list of suggested edits

Each suggestion should be in this format:
"[old text] -> [new text]
brief description of reason for change"

Be concise and prioritize edits that make the resume better match the job description
--- Resume ---
${resumeText}

--- Job Description ---
${job}
` 

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  })

  const output = completion.choices[0]?.message?.content || 'No response.'

  return new Response(JSON.stringify({ output }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
