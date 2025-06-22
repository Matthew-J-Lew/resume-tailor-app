'use client'

import { useState } from 'react'

export default function UploadResumePage() {
  const [file, setFile] = useState(null)
  const [latex, setLatex] = useState('')
  const [jsonOutput, setJsonOutput] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const formData = new FormData()

    if (file) formData.append('resume', file)
    if (latex) formData.append('latex', latex)

    const res = await fetch('/api/parse-resume', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    setJsonOutput(data)
    setLoading(false)
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Upload Resume</h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 text-white"
      />

      <textarea
        value={latex}
        onChange={(e) => setLatex(e.target.value)}
        placeholder="Or paste LaTeX here"
        rows={10}
        className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Parsing...' : 'Parse Resume'}
      </button>

      {jsonOutput && (
        <>
            <p className="mt-4 text-green-400">Resume parsed and saved to database!</p>
            <pre className="mt-2 bg-gray-800 text-white p-4 rounded border border-gray-600 whitespace-pre-wrap">
                {JSON.stringify(jsonOutput, null, 2)}
            </pre>
        </>
        )}

    </div>
  )
}
