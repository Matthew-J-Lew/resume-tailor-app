'use client'

import { useState } from 'react'

export default function LatexTailorPage() {
  const [latexCode, setLatexCode] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [suggestions, setSuggestions] = useState('')
  const [loading, setLoading] = useState(false)
  const [instructions, setInstructions] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuggestions('')

    try {
      const response = await fetch('/api/latex-tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latexCode, jobDescription, instructions }),
      })

      const data = await response.json()
      setSuggestions(data.output)
    } catch (error) {
      console.error('Error tailoring LaTeX resume:', error)
      setSuggestions('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-blue-400">Tailor Your LaTeX Resume</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">LaTeX Resume Code</label>
            <textarea
              value={latexCode}
              onChange={(e) => setLatexCode(e.target.value)}
              rows={12}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
              placeholder="Paste your LaTeX resume code here..."
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
            {loading ? 'Tailoring...' : 'Tailor Resume'}
          </button>
        </form>

        {suggestions && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-green-400">Suggested Edits</h2>
            <pre className="whitespace-pre-wrap bg-gray-800 text-white p-4 rounded border border-gray-600">
              {suggestions}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
