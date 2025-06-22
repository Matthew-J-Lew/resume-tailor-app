import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
    return NextResponse.json(entry)
  } catch (err) {
    console.error('Error saving education:', err)
    return NextResponse.json({ error: 'Error saving education' }, { status: 500 })
  }
}

export async function PUT(req) {
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
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Error updating education:', err)
    return NextResponse.json({ error: 'Error updating education' }, { status: 500 })
  }
}

export async function DELETE(req) {
  const { id } = await req.json()

  try {
    await prisma.education.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting education:', err)
    return NextResponse.json({ error: 'Error deleting education' }, { status: 500 })
  }
}
