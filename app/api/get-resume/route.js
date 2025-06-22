// /app/api/get-resume/route.js
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const [education, skills, experience, projects] = await Promise.all([
      prisma.education.findMany(),
      prisma.skill.findMany(),
      prisma.experience.findMany(),
      prisma.project.findMany()
    ])

    return NextResponse.json({ education, skills, experience, projects })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 })
  }
}
