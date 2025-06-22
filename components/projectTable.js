'use client'

import { useEffect, useState } from 'react'

export default function ProjectTable() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [newEntry, setNewEntry] = useState({
    projectName: '',
    bullets: '',
    technologies: '',
  })
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/get-resume')
      const data = await res.json()
      setEntries(data.projects || [])
    } catch (err) {
      console.error('Failed to fetch project entries:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    await fetch('/api/projects', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchEntries()
  }

  const handleEdit = (entry) => {
    setEditId(entry.id)
    setNewEntry({
      ...entry,
      bullets: JSON.stringify(entry.bullets ?? []),
      technologies: JSON.stringify(entry.technologies ?? []),
    })
  }

  const handleSaveEdit = async () => {
    const formatted = {
      id: editId,
      projectName: newEntry.projectName,
      bullets: JSON.parse(newEntry.bullets || '[]'),
      technologies: JSON.parse(newEntry.technologies || '[]'),
    }

    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    setEditId(null)
    resetForm()
    fetchEntries()
  }

  const handleAdd = async () => {
    const formatted = {
      projectName: newEntry.projectName,
      bullets: JSON.parse(newEntry.bullets || '[]'),
      technologies: JSON.parse(newEntry.technologies || '[]'),
    }

    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    resetForm()
    fetchEntries()
  }

  const resetForm = () => {
    setNewEntry({ projectName: '', bullets: '', technologies: '' })
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-blue-300 mb-4">Projects</h2>

      {loading ? (
        <p>Loading...</p>
      ) : entries.length === 0 ? (
        <p className="text-gray-400">No projects found.</p>
      ) : (
        <div className="max-h-[50vh] overflow-y-auto border border-gray-700 rounded-lg shadow-inner mb-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-800 text-gray-300 sticky top-0">
              <tr>
                <th className="px-4 py-2 border-b border-gray-600">Project</th>
                <th className="px-4 py-2 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-700">
                  <td className="px-4 py-2 border-b border-gray-700">{entry.projectName}</td>
                  <td className="px-4 py-2 border-b border-gray-700 space-x-2">
                    <button onClick={() => handleEdit(entry)} className="px-2 py-1 bg-yellow-600 text-white rounded text-xs">Edit</button>
                    <button onClick={() => handleDelete(entry.id)} className="px-2 py-1 bg-red-600 text-white rounded text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg mb-2">{editId ? 'Edit Project' : 'Add Project'}</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={newEntry.projectName}
            onChange={(e) => setNewEntry({ ...newEntry, projectName: e.target.value })}
            placeholder="Project Name"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500 col-span-2"
          />
          <textarea
            value={newEntry.bullets}
            onChange={(e) => setNewEntry({ ...newEntry, bullets: e.target.value })}
            placeholder="Bullets (JSON format)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <textarea
            value={newEntry.technologies}
            onChange={(e) => setNewEntry({ ...newEntry, technologies: e.target.value })}
            placeholder="Technologies (JSON format)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
        </div>
        <button
          onClick={editId ? handleSaveEdit : handleAdd}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          {editId ? 'Save Changes' : 'Add Project'}
        </button>
      </div>
    </div>
  )
}
