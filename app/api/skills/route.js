import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create or update a skill based on its name
export async function POST(req) {
  // Extract skill data from the request
  const { name, type } = await req.json()

  try {
    // Upsert the skill entry: update if it exists, create if it doesn't
    await prisma.skill.upsert({
      where: { name },
      update: { type },
      create: { name, type },
    })

    // Return success response
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error adding skill:', err)
    return NextResponse.json({ error: 'Error adding skill' }, { status: 500 })
  }
}

// Update a skill entry based on its name
export async function PUT(req) {
  // Extract skill data from the request
  const { name, type } = await req.json()

  try {
    // Upsert the skill entry: update if it exists, create if it doesn't
    await prisma.skill.upsert({
      where: { name },
      update: { type },
      create: { name, type },
    })

    // Return success response
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error updating skill:', err)
    return NextResponse.json({ error: 'Error updating skill' }, { status: 500 })
  }
}

// Remove a skill entry by name
export async function DELETE(req) {
  // Extract the skill name to delete
  const { name } = await req.json()

  try {
    // Delete the skill entry matching the name
    await prisma.skill.delete({
      where: { name },
    })

    // Return success response
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting skill:', err)
    return NextResponse.json({ error: 'Error deleting skill' }, { status: 500 })
  }
}
