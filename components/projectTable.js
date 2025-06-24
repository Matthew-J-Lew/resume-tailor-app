'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProjectTable() {
  // State to hold all project entries fetched from the backend
  const [entries, setEntries] = useState([])

  // Loading indicator for fetch process
  const [loading, setLoading] = useState(true)

  // State for the form inputs when adding or editing a project
  const [newEntry, setNewEntry] = useState({
    projectName: '',
    bullets: '',
    technologies: '',
    startDate: '',
    endDate: '',
    githubUrl: '',
  })

  // Stores the id of the project being edited; null means adding new
  const [editId, setEditId] = useState(null)

  // Refs for auto-resizing textareas
  const bulletsRef = useRef(null)
  const techRef = useRef(null)

  // Fetch projects on component mount
  useEffect(() => {
    fetchEntries()
  }, [])

  // Auto-resize bullets textarea when content changes
  useEffect(() => {
    if (bulletsRef.current) {
      bulletsRef.current.style.height = 'auto'
      bulletsRef.current.style.height = `${bulletsRef.current.scrollHeight}px`
    }
  }, [newEntry.bullets])

  // Auto-resize technologies textarea when content changes
  useEffect(() => {
    if (techRef.current) {
      techRef.current.style.height = 'auto'
      techRef.current.style.height = `${techRef.current.scrollHeight}px`
    }
  }, [newEntry.technologies])

  // Fetch project entries from backend API '/api/get-resume'
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

  // Delete project entry by id, then refresh the list
  const handleDelete = async (id) => {
    await fetch('/api/projects', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchEntries()
  }

  // Populate form fields for editing a project entry
  const handleEdit = (entry) => {
    setEditId(entry.id)
    setNewEntry({
      ...entry,
      bullets: (entry.bullets ?? []).join('\n'),
      technologies: (entry.technologies ?? []).join('\n'),
      startDate: entry.startDate || '',
      endDate: entry.endDate || '',
      githubUrl: entry.githubUrl || '',
    })
  }

  // Save changes to an existing project via PUT request
  const handleSaveEdit = async () => {
    const formatted = {
      id: editId,
      projectName: newEntry.projectName,
      bullets: newEntry.bullets.split('\n').map(b => b.trim()).filter(Boolean),
      technologies: newEntry.technologies.split('\n').map(t => t.trim()).filter(Boolean),
      startDate: newEntry.startDate,
      endDate: newEntry.endDate,
      githubUrl: newEntry.githubUrl,
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

  // Add a new project entry via POST request
  const handleAdd = async () => {
    const formatted = {
      projectName: newEntry.projectName,
      bullets: newEntry.bullets.split('\n').map(b => b.trim()).filter(Boolean),
      technologies: newEntry.technologies.split('\n').map(t => t.trim()).filter(Boolean),
      startDate: newEntry.startDate,
      endDate: newEntry.endDate,
      githubUrl: newEntry.githubUrl,
    }

    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    resetForm()
    fetchEntries()
  }

  // Reset form fields to empty/default values
  const resetForm = () => {
    setNewEntry({
      projectName: '',
      bullets: '',
      technologies: '',
      startDate: '',
      endDate: '',
      githubUrl: '',
    })
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md mb-8">
      {/* Section title */}
      <h2 className="text-xl font-semibold text-blue-300 mb-4">Projects</h2>

      {/* Loading, empty state, or projects table */}
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
                <th className="px-4 py-2 border-b border-gray-600">Start</th>
                <th className="px-4 py-2 border-b border-gray-600">End</th>
                <th className="px-4 py-2 border-b border-gray-600">GitHub</th>
                <th className="px-4 py-2 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each project entry as a table row */}
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-700">
                  <td className="px-4 py-2 border-b border-gray-700">{entry.projectName}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.startDate}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.endDate}</td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    {entry.githubUrl ? (
                      <a href={entry.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                        Link
                      </a>
                    ) : '—'}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700 space-x-2">
                    {/* Edit and Delete buttons */}
                    <button onClick={() => handleEdit(entry)} className="px-2 py-1 bg-yellow-600 text-white rounded text-xs">Edit</button>
                    <button onClick={() => handleDelete(entry.id)} className="px-2 py-1 bg-red-600 text-white rounded text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form for adding or editing a project */}
      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg mb-2">{editId ? 'Edit Project' : 'Add Project'}</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Project name input */}
          <input
            type="text"
            value={newEntry.projectName}
            onChange={(e) => setNewEntry({ ...newEntry, projectName: e.target.value })}
            placeholder="Project Name"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500 col-span-2"
          />
          {/* Start date input */}
          <input
            type="text"
            value={newEntry.startDate}
            onChange={(e) => setNewEntry({ ...newEntry, startDate: e.target.value })}
            placeholder="Start Date"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* End date input */}
          <input
            type="text"
            value={newEntry.endDate}
            onChange={(e) => setNewEntry({ ...newEntry, endDate: e.target.value })}
            placeholder="End Date"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* GitHub URL input */}
          <input
            type="text"
            value={newEntry.githubUrl}
            onChange={(e) => setNewEntry({ ...newEntry, githubUrl: e.target.value })}
            placeholder="GitHub Repo URL (optional)"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500 col-span-2"
          />
          {/* Project description bullets textarea */}
          <textarea
            ref={bulletsRef}
            value={newEntry.bullets}
            onChange={(e) => setNewEntry({ ...newEntry, bullets: e.target.value })}
            placeholder="Project Description (One entry per line)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500 overflow-hidden resize-none"
            rows={1}
          />
          {/* Technologies used textarea */}
          <textarea
            ref={techRef}
            value={newEntry.technologies}
            onChange={(e) => setNewEntry({ ...newEntry, technologies: e.target.value })}
            placeholder="Technologies Used (One entry per line)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500 overflow-hidden resize-none"
            rows={1}
          />
        </div>

        {/* Submit button to add or save changes */}
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
