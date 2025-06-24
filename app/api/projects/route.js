import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create or update a project based on projectName
export async function POST(req) {
  // Extract project data from the request 
  const { projectName, bullets, technologies, startDate, endDate, githubUrl } = await req.json()

  try {
    // Upsert a project entry: update if it exists, create if it doesn't
    const entry = await prisma.project.upsert({
      where: { projectName }, 
      update: { bullets, technologies, startDate, endDate, githubUrl },
      create: { projectName, bullets, technologies, startDate, endDate, githubUrl },
    })

    // Return the project as JSON
    return NextResponse.json(entry)
  } catch (err) {
    console.error('Error saving project:', err)
    return NextResponse.json({ error: 'Error saving project' }, { status: 500 })
  }
}

// Update an existing project entry by ID
export async function PUT(req) {
  // Extract project data and ID from the request 
  const { id, projectName, bullets, technologies, startDate, endDate, githubUrl } = await req.json()

  try {
    // Update the project entry that matches the given ID
    const updated = await prisma.project.update({
      where: { id },
      data: { projectName, bullets, technologies, startDate, endDate, githubUrl },
    })

    // Return the updated project as JSON
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Error updating project:', err)
    return NextResponse.json({ error: 'Error updating project' }, { status: 500 })
  }
}

// Remove a project entry by ID
export async function DELETE(req) {
  // Extract the ID of the project to delete
  const { id } = await req.json()

  try {
    // Delete the entry with the given ID
    await prisma.project.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting project:', err)
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 })
  }
}
