import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create or update an education entry based on schoolName and degree
export async function POST(req) {

  const {
    schoolName,
    degree,
    gpa,
    startDate,
    endDate,
    awards,
    relevantCourses,
  } = await req.json()

  try {
    // Use Prisma's upsert method to either update an existing entry or create a new one
    const entry = await prisma.education.upsert({
      where: { schoolName_degree: { schoolName, degree } }, 
      update: {
        gpa,
        startDate,
        endDate,
        awards,
        relevantCourses,
      },
      create: {
        schoolName,
        degree,
        gpa,
        startDate,
        endDate,
        awards,
        relevantCourses,
      },
    })
    // Return resulting entry as a JSON response
    return NextResponse.json(entry)
  } catch (err) {
    console.error('Error saving education:', err)
    return NextResponse.json({ error: 'Error saving education' }, { status: 500 })
  }
}

// Update an existing education entry by ID
export async function PUT(req) {
  // Extract updated data and ID from the request 
  const {
    id,
    schoolName,
    degree,
    gpa,
    startDate,
    endDate,
    awards,
    relevantCourses,
  } = await req.json()

  try {
    // Update the education entry that matches the given ID
    const updated = await prisma.education.update({
      where: { id },
      data: {
        schoolName,
        degree,
        gpa,
        startDate,
        endDate,
        awards,
        relevantCourses,
      },
    })
    // Return the updated entry as a JSON response
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Error updating education:', err)
    return NextResponse.json({ error: 'Error updating education' }, { status: 500 })
  }
}

// Remove an education entry by ID
export async function DELETE(req) {
  // Extract the ID of the education entry to delete
  const { id } = await req.json()

  try {
    // Delete the entry with the matching ID
    await prisma.education.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting education:', err)
    return NextResponse.json({ error: 'Error deleting education' }, { status: 500 })
  }
}
