import { NextResponse } from 'next/server'
import { insertParsedResume } from '@/lib/db/insertParsedResume'
import { sendToOpenAI } from '@/utils/callOpenAIParser'
import pdf from 'pdf-parse'

export const runtime = 'nodejs'

// Accepts either a PDF file or LaTeX resume string, parses it with OpenAI, and saves structured data
export async function POST(req) {
  // Parse incoming multipart form data
  const formData = await req.formData()
  const file = formData.get('resume')  // PDF file input (optional)
  const latex = formData.get('latex')  // LaTeX string input (optional)

  try {
    let resumeText = ''

    // If LaTeX input is provided, use it directly
    if (latex) {
      resumeText = latex
    }
    // Otherwise, extract text from uploaded PDF
    else if (file) {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const parsed = await pdf(buffer)
      resumeText = parsed.text.slice(0, 12000) // Limit size to avoid hitting token limits in OpenAI
    }

    else {
      return NextResponse.json({ error: 'No input provided' }, { status: 400 })
    }

    // Send the extracted resume text to OpenAI for parsing
    const parsedData = await sendToOpenAI(resumeText)

    if (parsedData.error) {
      return NextResponse.json({ error: 'OpenAI failed to parse resume' }, { status: 500 })
    }

    // Store the parsed data into the database
    await insertParsedResume(parsedData)

    // Return the parsed data
    return NextResponse.json(parsedData)
  } catch (err) {
    console.error('Error in parse-resume route:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
