import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create or update an experience entry based on a unique combination of jobTitle, companyName, and startDate
export async function POST(req) {

  const {
    jobTitle,
    companyName,
    startDate,
    endDate,
    location,
    isProject,
    bullets,
    technologies,
  } = await req.json()

  try {
    // Use Prisma's `upsert` method to insert or update the experience entry
    const entry = await prisma.experience.upsert({
      // Define unique composite key to look for an existing record
      where: {
        jobTitle_companyName_startDate: {
          jobTitle,
          companyName,
          startDate,
        },
      },
      // Update if it exists
      update: {
        endDate,
        location,
        isProject,
        bullets,
        technologies,
      },
      // Create new if it doesn't exist
      create: {
        jobTitle,
        companyName,
        startDate,
        endDate,
        location,
        isProject,
        bullets,
        technologies,
      },
    })

    // Return the entry as JSON
    return NextResponse.json(entry)
  } catch (err) {
    console.error('Error saving experience:', err)
    return NextResponse.json({ error: 'Error saving experience' }, { status: 500 })
  }
}

// Update an existing experience entry by its ID
export async function PUT(req) {
  // Extract experience data and entry ID from the request 
  const {
    id,
    jobTitle,
    companyName,
    startDate,
    endDate,
    location,
    isProject,
    bullets,
    technologies,
  } = await req.json()

  try {
    // Update the experience entry 
    const updated = await prisma.experience.update({
      where: { id },
      data: {
        jobTitle,
        companyName,
        startDate,
        endDate,
        location,
        isProject,
        bullets,
        technologies,
      },
    })

    // Return the updated entry as JSON
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Error updating experience:', err)
    return NextResponse.json({ error: 'Error updating experience' }, { status: 500 })
  }
}

// Delete an experience entry by its ID
export async function DELETE(req) {
  // Extract the ID of the experience entry to delete
  const { id } = await req.json()

  try {
    // Delete the entry with the given ID
    await prisma.experience.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting experience:', err)
    return NextResponse.json({ error: 'Error deleting experience' }, { status: 500 })
  }
}
