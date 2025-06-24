import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  const { projectName, bullets, technologies, startDate, endDate, githubUrl } = await req.json()

  try {
    const entry = await prisma.project.upsert({
      where: { projectName },
      update: { bullets, technologies, startDate, endDate, githubUrl },
      create: { projectName, bullets, technologies, startDate, endDate, githubUrl },
    })
    return NextResponse.json(entry)
  } catch (err) {
    console.error('Error saving project:', err)
    return NextResponse.json({ error: 'Error saving project' }, { status: 500 })
  }
}

export async function PUT(req) {
  const { id, projectName, bullets, technologies, startDate, endDate, githubUrl } = await req.json()

  try {
    const updated = await prisma.project.update({
      where: { id },
      data: { projectName, bullets, technologies, startDate, endDate, githubUrl },
    })
    return NextResponse.json(updated)
  } catch (err) {
    console.error('Error updating project:', err)
    return NextResponse.json({ error: 'Error updating project' }, { status: 500 })
  }
}

export async function DELETE(req) {
  const { id } = await req.json()

  try {
    await prisma.project.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting project:', err)
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 })
  }
}
