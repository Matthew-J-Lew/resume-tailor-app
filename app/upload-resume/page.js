'use client'

import { useRef, useState } from 'react'

export default function UploadResumePage() {
  const [file, setFile] = useState(null)
  const [latex, setLatex] = useState('')
  const [jsonOutput, setJsonOutput] = useState(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef(null)

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
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Upload Resume</h1>
      
      <p className="text-sm text-gray-400 mb-4">
        Upload your PDF resume or paste in LaTeX code below and your education, skills, experience,
        and projects will be added to your database!
      </p>

      <label className="block mb-2 font-semibold">LaTeX Resume Code</label>

      <textarea
        value={latex}
        onChange={(e) => setLatex(e.target.value)}
        placeholder="Paste LaTeX here..."
        rows={10}
        className="w-full p-2 mb-2 bg-gray-800 text-white border border-gray-600 rounded"
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p className="text-sm text-green-400 mb-4">
          Selected file: <span className="font-medium">{file.name}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
        >
          Upload Resume
        </button>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Parsing...' : 'Parse Resume'}
        </button>
      </div>

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
