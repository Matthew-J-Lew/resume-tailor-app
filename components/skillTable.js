'use client'

import { useEffect, useState } from 'react'

export default function SkillTable() {
  // State to hold skills fetched from backend
  const [skills, setSkills] = useState([])

  // Loading state for fetch operation
  const [loading, setLoading] = useState(true)

  // State for the form input: skill name and type
  const [newSkill, setNewSkill] = useState({ name: '', type: '' })

  // Index of skill currently being edited; null means add mode
  const [editIndex, setEditIndex] = useState(null)

  // Defines the order of skill types for sorting display
  const typeOrder = {
    'Programming Languages': 1,
    'Web Development': 2,
    'Database': 3,
    'Tools': 4,
    'Other': 5,
    'Soft Skills': 6,
  }

  // Fetch skills when component mounts
  useEffect(() => {
    fetchSkills()
  }, [])

  // Fetch skills data from API
  const fetchSkills = async () => {
    try {
      const res = await fetch('/api/get-resume')
      const data = await res.json()
      setSkills(data.skills || [])
    } catch (err) {
      console.error('Failed to fetch skills:', err)
    } finally {
      setLoading(false)
    }
  }

  // Delete skill by name and refresh list
  const handleDelete = async (name) => {
    await fetch('/api/skills', {
      method: 'DELETE',
      body: JSON.stringify({ name }),
    })
    fetchSkills()
  }

  // Populate form for editing skill at given index
  const handleEdit = (index) => {
    setEditIndex(index)
    setNewSkill(skills[index])
  }

  // Save edited skill via PUT request, then reset form and refresh list
  const handleSaveEdit = async () => {
    await fetch('/api/skills', {
      method: 'PUT',
      body: JSON.stringify(newSkill),
    })
    setEditIndex(null)
    setNewSkill({ name: '', type: '' })
    fetchSkills()
  }

  // Add new skill via POST request, reset form and refresh list
  const handleAdd = async () => {
    await fetch('/api/skills', {
      method: 'POST',
      body: JSON.stringify(newSkill),
    })
    setNewSkill({ name: '', type: '' })
    fetchSkills()
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md mb-8">
      {/* Section title */}
      <h2 className="text-xl font-semibold text-blue-300 mb-4">Skills</h2>

      {/* Loading indicator, empty state, or skill table */}
      {loading ? (
        <p>Loading...</p>
      ) : skills.length === 0 ? (
        <p className="text-gray-400">No skills found.</p>
      ) : (
        <div className="max-h-[50vh] overflow-y-auto border border-gray-700 rounded-lg shadow-inner mb-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-800 text-gray-300 sticky top-0">
              <tr>
                <th className="px-4 py-2 border-b border-gray-600">Skill</th>
                <th className="px-4 py-2 border-b border-gray-600">Type</th>
                <th className="px-4 py-2 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sort skills by type and name, then render */}
              {[...skills]
                .sort((a, b) => {
                  const typeA = typeOrder[a.type] || 99
                  const typeB = typeOrder[b.type] || 99
                  if (typeA !== typeB) return typeA - typeB
                  return a.name.localeCompare(b.name)
                })
                .map((skill, i) => (
                  <tr key={skill.name} className="hover:bg-gray-700">
                    <td className="px-4 py-2 border-b border-gray-700">{skill.name}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{skill.type || 'N/A'}</td>
                    <td className="px-4 py-2 border-b border-gray-700 space-x-2">
                      {/* Edit skill button */}
                      <button
                        onClick={() => handleEdit(i)}
                        className="px-2 py-1 bg-yellow-600 text-white rounded text-xs"
                      >
                        Edit
                      </button>
                      {/* Delete skill button */}
                      <button
                        onClick={() => handleDelete(skill.name)}
                        className="px-2 py-1 bg-red-600 text-white rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form to add or edit skill */}
      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg mb-2">
          {editIndex !== null ? 'Edit Skill' : 'Add Skill'}
        </h3>
        <div className="space-y-2">
          {/* Skill name input */}
          <input
            type="text"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            placeholder="Skill Name"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* Skill type input */}
          <input
            type="text"
            value={newSkill.type}
            onChange={(e) => setNewSkill({ ...newSkill, type: e.target.value })}
            placeholder="Skill Type"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-500"
          />
          {/* Submit button to add or save changes */}
          <button
            onClick={editIndex !== null ? handleSaveEdit : handleAdd}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            {editIndex !== null ? 'Save Changes' : 'Add Skill'}
          </button>
        </div>
      </div>
    </div>
  )
}
