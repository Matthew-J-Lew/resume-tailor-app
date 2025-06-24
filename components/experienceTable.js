'use client'

import { useEffect, useState, useRef } from 'react'

export default function ExperienceTable() {
  // State to store all experience entries fetched from the backend
  const [entries, setEntries] = useState([])

  // Loading state while fetching data
  const [loading, setLoading] = useState(true)

  // State for the form inputs for adding/editing an experience entry
  const [newEntry, setNewEntry] = useState({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    location: '',
    isProject: false,
    bullets: '',
    technologies: '',
  })

  // Stores the id of the entry currently being edited (null if adding new)
  const [editId, setEditId] = useState(null)

  // Refs to textareas for auto-resizing based on content length
  const bulletsRef = useRef(null)
  const techRef = useRef(null)

  // Fetch experience entries once on component mount
  useEffect(() => {
    fetchEntries()
  }, [])

  // Auto-resize the bullets textarea when its content changes
  useEffect(() => {
    if (bulletsRef.current) {
      bulletsRef.current.style.height = 'auto'
      bulletsRef.current.style.height = `${bulletsRef.current.scrollHeight}px`
    }
  }, [newEntry.bullets])

  // Auto-resize the technologies textarea when its content changes
  useEffect(() => {
    if (techRef.current) {
      techRef.current.style.height = 'auto'
      techRef.current.style.height = `${techRef.current.scrollHeight}px`
    }
  }, [newEntry.technologies])

  // Fetch entries from backend API endpoint '/api/get-resume'
  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/get-resume')
      const data = await res.json()
      setEntries(data.experience || [])
    } catch (err) {
      console.error('Failed to fetch experience entries:', err)
    } finally {
      setLoading(false)
    }
  }

  // Delete an experience entry by id, then refetch entries
  const handleDelete = async (id) => {
    await fetch('/api/experience', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchEntries()
  }

  // Populate the form with entry data for editing
  const handleEdit = (entry) => {
    setEditId(entry.id)
    setNewEntry({
      jobTitle: entry.jobTitle || '',
      companyName: entry.companyName || '',
      startDate: entry.startDate || '',
      endDate: entry.endDate || '',
      location: entry.location || '',
      isProject: entry.isProject || false,
      bullets: (entry.bullets || []).join('\n'),
      technologies: (entry.technologies || []).join('\n'),
    })
  }

  // Save edited entry via PUT request, then reset form and refresh list
  const handleSaveEdit = async () => {
    const formatted = {
      ...newEntry,
      id: editId,
      isProject: Boolean(newEntry.isProject),
      bullets: newEntry.bullets.split('\n').map((b) => b.trim()).filter(Boolean),
      technologies: newEntry.isProject
        ? newEntry.technologies.split('\n').map((t) => t.trim()).filter(Boolean)
        : undefined,
    }

    await fetch('/api/experience', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    setEditId(null)
    resetForm()
    fetchEntries()
  }

  // Add new entry via POST request, then reset form and refresh list
  const handleAdd = async () => {
    const formatted = {
      ...newEntry,
      isProject: Boolean(newEntry.isProject),
      bullets: newEntry.bullets.split('\n').map((b) => b.trim()).filter(Boolean),
      technologies: newEntry.isProject
        ? newEntry.technologies.split('\n').map((t) => t.trim()).filter(Boolean)
        : undefined,
    }

    await fetch('/api/experience', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    resetForm()
    fetchEntries()
  }

  // Clear the form inputs to default empty values
  const resetForm = () => {
    setNewEntry({
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      location: '',
      isProject: false,
      bullets: '',
      technologies: '',
    })
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md mb-8">
      {/* Section title */}
      <h2 className="text-xl font-semibold text-blue-300 mb-4">Experience</h2>

      {/* Show loading, empty state, or experience entries table */}
      {loading ? (
        <p>Loading...</p>
      ) : entries.length === 0 ? (
        <p className="text-gray-400">No experience entries found.</p>
      ) : (
        <div className="max-h-[50vh] overflow-y-auto border border-gray-700 rounded-lg shadow-inner mb-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-800 text-gray-300 sticky top-0">
              <tr>
                <th className="px-4 py-2 border-b border-gray-600">Job Title</th>
                <th className="px-4 py-2 border-b border-gray-600">Company</th>
                <th className="px-4 py-2 border-b border-gray-600">Start</th>
                <th className="px-4 py-2 border-b border-gray-600">End</th>
                <th className="px-4 py-2 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each experience entry in a table row */}
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-700">
                  <td className="px-4 py-2 border-b border-gray-700">{entry.jobTitle}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.companyName}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.startDate}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.endDate}</td>
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

      {/* Form for adding or editing an experience entry */}
      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg mb-2">{editId ? 'Edit Entry' : 'Add Entry'}</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Job Title input */}
          <input
            type="text"
            value={newEntry.jobTitle}
            onChange={(e) => setNewEntry({ ...newEntry, jobTitle: e.target.value })}
            placeholder="Job Title"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* Company Name input */}
          <input
            type="text"
            value={newEntry.companyName}
            onChange={(e) => setNewEntry({ ...newEntry, companyName: e.target.value })}
            placeholder="Company"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* Start Date input */}
          <input
            type="text"
            value={newEntry.startDate}
            onChange={(e) => setNewEntry({ ...newEntry, startDate: e.target.value })}
            placeholder="Start Date"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* End Date input */}
          <input
            type="text"
            value={newEntry.endDate}
            onChange={(e) => setNewEntry({ ...newEntry, endDate: e.target.value })}
            placeholder="End Date"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* Location input */}
          <input
            type="text"
            value={newEntry.location}
            onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
            placeholder="Location"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* Checkbox to mark this entry as a project */}
          <label className="flex items-center text-sm col-span-2">
            <input
              type="checkbox"
              checked={newEntry.isProject}
              onChange={(e) => setNewEntry({ ...newEntry, isProject: e.target.checked })}
              className="mr-2"
            />
            Is Project?
          </label>
          {/* Textarea for job description bullet points */}
          <textarea
            ref={bulletsRef}
            value={newEntry.bullets}
            onChange={(e) => setNewEntry({ ...newEntry, bullets: e.target.value })}
            placeholder="Job Description (One entry per line)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500 overflow-hidden resize-none"
          />
          {/* Conditionally show technologies textarea if this is a project */}
          {newEntry.isProject && (
            <textarea
              ref={techRef}
              value={newEntry.technologies}
              onChange={(e) => setNewEntry({ ...newEntry, technologies: e.target.value })}
              placeholder="Technologies (One per line)"
              className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500 overflow-hidden resize-none"
            />
          )}
        </div>

        {/* Submit button for adding or saving changes */}
        <button
          onClick={editId ? handleSaveEdit : handleAdd}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          {editId ? 'Save Changes' : 'Add Entry'}
        </button>
      </div>
    </div>
  )
}
