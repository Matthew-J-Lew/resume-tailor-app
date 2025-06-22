import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
    const entry = await prisma.experience.upsert({
      where: {
        jobTitle_companyName_startDate: {
          jobTitle,
          companyName,
          startDate,
        },
      },
      update: {
        endDate,
        location,
        isProject,
        bullets,
        technologies,
      },
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
    return NextResponse.json(entry)
  } catch (err) {
    console.error('Error saving experience:', err)
    return NextResponse.json({ error: 'Error saving experience' }, { status: 500 })
  }
}

export async function PUT(req) {
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
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Error updating experience:', err)
    return NextResponse.json({ error: 'Error updating experience' }, { status: 500 })
  }
}

export async function DELETE(req) {
  const { id } = await req.json()

  try {
    await prisma.experience.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting experience:', err)
    return NextResponse.json({ error: 'Error deleting experience' }, { status: 500 })
  }
}
