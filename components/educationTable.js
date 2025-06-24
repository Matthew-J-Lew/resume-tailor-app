'use client'

import { useEffect, useRef, useState } from 'react'

export default function EducationTable() {
  // State to hold education entries fetched from the database
  const [entries, setEntries] = useState([])
  // Loading state to indicate fetching status
  const [loading, setLoading] = useState(true)
  // State to hold form inputs for new or editing education entries
  const [newEntry, setNewEntry] = useState({
    schoolName: '',
    degree: '',
    gpa: '',
    startDate: '',
    endDate: '',
    awards: '',
    relevantCourses: '',
  })
  // ID of the entry currently being edited, or null if adding new
  const [editId, setEditId] = useState(null)

  // Refs for textareas to auto resize as content changes
  const awardsRef = useRef(null)
  const coursesRef = useRef(null)

  // Fetch education entries when component mounts
  useEffect(() => {
    fetchEntries()
  }, [])

  // Auto-resize textarea height based on content
  const autoResizeTextarea = (ref) => {
    if (ref?.current) {
      ref.current.style.height = 'auto'
      ref.current.style.height = `${ref.current.scrollHeight}px`
    }
  }

  // Auto-resize textareas when awards or courses text changes
  useEffect(() => {
    autoResizeTextarea(awardsRef)
    autoResizeTextarea(coursesRef)
  }, [newEntry.awards, newEntry.relevantCourses])

  // Fetch education entries from API and update state
  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/get-resume')
      const data = await res.json()
      setEntries(data.education || [])
    } catch (err) {
      console.error('Failed to fetch education entries:', err)
    } finally {
      setLoading(false)
    }
  }

  // Delete an education entry by ID and refresh the list
  const handleDelete = async (id) => {
    await fetch('/api/education', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchEntries()
  }

  // Populate form with existing entry data for editing
  const handleEdit = (entry) => {
    setEditId(entry.id)
    setNewEntry({
      ...entry,
      awards: (entry.awards ?? []).join('\n'),
      relevantCourses: (entry.relevantCourses ?? []).join('\n'),
    })
  }

  // Save changes to an existing education entry via PUT request
  const handleSaveEdit = async () => {
    const formatted = {
      ...newEntry,
      id: editId,
      gpa: parseFloat(newEntry.gpa),
      awards: newEntry.awards.split('\n').map(s => s.trim()).filter(Boolean),
      relevantCourses: newEntry.relevantCourses.split('\n').map(s => s.trim()).filter(Boolean),
    }

    await fetch('/api/education', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    setEditId(null)
    resetForm()
    fetchEntries()
  }

  // Add a new education entry via POST request
  const handleAdd = async () => {
    const formatted = {
      ...newEntry,
      gpa: parseFloat(newEntry.gpa),
      awards: newEntry.awards.split('\n').map(s => s.trim()).filter(Boolean),
      relevantCourses: newEntry.relevantCourses.split('\n').map(s => s.trim()).filter(Boolean),
    }

    await fetch('/api/education', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    resetForm()
    fetchEntries()
  }

  // Reset form inputs to empty
  const resetForm = () => {
    setNewEntry({
      schoolName: '',
      degree: '',
      gpa: '',
      startDate: '',
      endDate: '',
      awards: '',
      relevantCourses: '',
    })
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-blue-300 mb-4">Education</h2>

      {loading ? (
        <p>Loading...</p>
      ) : entries.length === 0 ? (
        <p className="text-gray-400">No education entries found.</p>
      ) : (
        <div className="max-h-[50vh] overflow-y-auto border border-gray-700 rounded-lg shadow-inner mb-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-800 text-gray-300 sticky top-0">
              <tr>
                <th className="px-4 py-2 border-b border-gray-600">School</th>
                <th className="px-4 py-2 border-b border-gray-600">Degree</th>
                <th className="px-4 py-2 border-b border-gray-600">GPA</th>
                <th className="px-4 py-2 border-b border-gray-600">Start</th>
                <th className="px-4 py-2 border-b border-gray-600">End</th>
                <th className="px-4 py-2 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-700">
                  <td className="px-4 py-2 border-b border-gray-700">{entry.schoolName}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.degree}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.gpa}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.startDate}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{entry.endDate}</td>
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
        <h3 className="text-lg mb-2">{editId ? 'Edit Entry' : 'Add Entry'}</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={newEntry.schoolName}
            onChange={(e) => setNewEntry({ ...newEntry, schoolName: e.target.value })}
            placeholder="School Name"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <input
            type="text"
            value={newEntry.degree}
            onChange={(e) => setNewEntry({ ...newEntry, degree: e.target.value })}
            placeholder="Degree"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <input
            type="text"
            value={newEntry.gpa}
            onChange={(e) => setNewEntry({ ...newEntry, gpa: e.target.value })}
            placeholder="GPA"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <input
            type="text"
            value={newEntry.startDate}
            onChange={(e) => setNewEntry({ ...newEntry, startDate: e.target.value })}
            placeholder="Start Date"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <input
            type="text"
            value={newEntry.endDate}
            onChange={(e) => setNewEntry({ ...newEntry, endDate: e.target.value })}
            placeholder="End Date"
            className="p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <textarea
            ref={awardsRef}
            value={newEntry.awards}
            onChange={(e) => {
              setNewEntry({ ...newEntry, awards: e.target.value })
              autoResizeTextarea(awardsRef)
            }}
            placeholder="Awards (One entry per line)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500 overflow-hidden resize-none"
            rows={1}
          />
          <textarea
            ref={coursesRef}
            value={newEntry.relevantCourses}
            onChange={(e) => {
              setNewEntry({ ...newEntry, relevantCourses: e.target.value })
              autoResizeTextarea(coursesRef)
            }}
            placeholder="Relevant Coursework (One entry per line)"
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500 overflow-hidden resize-none"
            rows={1}
          />
        </div>
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
