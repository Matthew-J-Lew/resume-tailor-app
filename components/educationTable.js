'use client'

import { useEffect, useState } from 'react'

export default function EducationTable() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [newEntry, setNewEntry] = useState({
    schoolName: '',
    degree: '',
    gpa: '',
    startDate: '',
    endDate: '',
    awards: '',
    relevantCourses: '',
  })
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchEntries()
  }, [])

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

  const handleDelete = async (id) => {
    await fetch('/api/education', {
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
      awards: JSON.stringify(entry.awards ?? []),
      relevantCourses: JSON.stringify(entry.relevantCourses ?? []),
    })
  }

  const handleSaveEdit = async () => {
    const formatted = {
      ...newEntry,
      id: editId,
      gpa: parseFloat(newEntry.gpa),
      awards: JSON.parse(newEntry.awards || '[]'),
      relevantCourses: JSON.parse(newEntry.relevantCourses || '[]'),
    }

    await fetch('/api/education', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    setEditId(null)
    setNewEntry({
      schoolName: '',
      degree: '',
      gpa: '',
      startDate: '',
      endDate: '',
      awards: '',
      relevantCourses: '',
    })
    fetchEntries()
  }

  const handleAdd = async () => {
    const formatted = {
      ...newEntry,
      gpa: parseFloat(newEntry.gpa),
      awards: JSON.parse(newEntry.awards || '[]'),
      relevantCourses: JSON.parse(newEntry.relevantCourses || '[]'),
    }

    await fetch('/api/education', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formatted),
    })

    setNewEntry({
      schoolName: '',
      degree: '',
      gpa: '',
      startDate: '',
      endDate: '',
      awards: '',
      relevantCourses: '',
    })
    fetchEntries()
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
          {['schoolName', 'degree', 'gpa', 'startDate', 'endDate'].map((field) => (
            <input
              key={field}
              type="text"
              value={newEntry[field]}
              onChange={(e) => setNewEntry({ ...newEntry, [field]: e.target.value })}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="p-2 rounded bg-gray-700 text-white border border-gray-500"
            />
          ))}
          <textarea
            value={newEntry.awards}
            onChange={(e) => setNewEntry({ ...newEntry, awards: e.target.value })}
            placeholder='Awards (JSON format)'
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          <textarea
            value={newEntry.relevantCourses}
            onChange={(e) => setNewEntry({ ...newEntry, relevantCourses: e.target.value })}
            placeholder='Relevant Courses (JSON format)'
            className="col-span-2 p-2 rounded bg-gray-700 text-white border border-gray-500"
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
