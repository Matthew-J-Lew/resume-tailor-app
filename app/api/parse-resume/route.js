import { NextResponse } from 'next/server'
import { insertParsedResume } from '@/lib/db/insertParsedResume'
import { sendToOpenAI } from '@/utils/callOpenAIParser'
import pdf from 'pdf-parse'

export const runtime = 'nodejs'

export async function POST(req) {
  const formData = await req.formData()
  const file = formData.get('resume')
  const latex = formData.get('latex')

  try {
    let resumeText = ''

    if (latex) {
      resumeText = latex
    } else if (file) {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const parsed = await pdf(buffer)
      resumeText = parsed.text.slice(0, 12000) // Rough token-safe limit
    } else {
      return NextResponse.json({ error: 'No input provided' }, { status: 400 })
    }

    const parsedData = await sendToOpenAI(resumeText)

    if (parsedData.error) {
      return NextResponse.json({ error: 'OpenAI failed to parse resume' }, { status: 500 })
    }

    await insertParsedResume(parsedData)

    return NextResponse.json(parsedData)
  } catch (err) {
    console.error('Error in parse-resume route:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
