'use client'

import { useState } from 'react'

export default function LatexCoverLetterPage() {
  const [latexCode, setLatexCode] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const [loading, setLoading] = useState(false)
  const [instructions, setInstructions] = useState('')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuggestions('')
    setCopied(false)

    try {
      const response = await fetch('/api/tailor-cover-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latexCode, jobDescription, instructions }),
      })

      const data = await response.json()
      setSuggestions(data.output)
    } catch (error) {
      console.error('Error tailoring cover letter:', error)
      setSuggestions('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(suggestions)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Tailor Your LaTeX Cover Letter</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">LaTeX Cover Letter Code</label>
          <textarea
            value={latexCode}
            onChange={(e) => setLatexCode(e.target.value)}
            rows={12}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
            placeholder="Paste your LaTeX cover letter code here..."
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={6}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
            placeholder="Paste the job description here..."
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Special Instructions (optional)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
            placeholder="Any extra notes or instructions for tailoring..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Tailoring...' : 'Tailor Cover Letter'}
        </button>
      </form>

      {suggestions && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-green-400">Suggested Edits</h2>
            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 bg-gray-700 border border-gray-500 rounded hover:bg-gray-600"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
          <pre className="whitespace-pre-wrap bg-gray-800 text-white p-4 rounded border border-gray-600">
            {suggestions}
          </pre>
        </div>
      )}
    </div>
  )
}
