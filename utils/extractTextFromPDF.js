// /utils/extractTextFromPDF.js
import pdfParse from 'pdf-parse'

export async function extractTextFromPDF(buffer) {
  try {
    const data = await pdfParse(buffer)
    return data.text
  } catch (err) {
    console.error('PDF parsing failed:', err)
    return ''
  }
}
