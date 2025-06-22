'use client'

import EducationTable from '@/components/educationTable'
import ExperienceTable from '@/components/experienceTable'
import SkillTable from '@/components/SkillTable'
import ProjectTable from '@/components/projectTable'

export default function ResumeDashboard() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Resume Dashboard</h1>

      <SkillTable />
      <EducationTable />
      <ExperienceTable />
      <ProjectTable />
      
    </div>
  )
}
