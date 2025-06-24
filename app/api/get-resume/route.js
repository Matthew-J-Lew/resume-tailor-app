import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

// Fetch all resume data (education, skills, experience, projects)
export async function GET() {
  try {
    // Query all resume sections in parallel 
    const [education, skills, experience, projects] = await Promise.all([
      prisma.education.findMany(),
      prisma.skill.findMany(),
      prisma.experience.findMany(),
      prisma.project.findMany(),
    ])

    // Return all sections as a single JSON response
    return NextResponse.json({ education, skills, experience, projects })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 })
  }
}
