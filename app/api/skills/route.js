import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  const { name, type } = await req.json()

  try {
    await prisma.skill.upsert({
      where: { name },
      update: { type },
      create: { name, type },
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error adding skill:', err)
    return NextResponse.json({ error: 'Error adding skill' }, { status: 500 })
  }
}

export async function PUT(req) {
  const { name, type } = await req.json()

  try {
    await prisma.skill.upsert({
      where: { name },
      update: { type },
      create: { name, type },
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error updating skill:', err)
    return NextResponse.json({ error: 'Error updating skill' }, { status: 500 })
  }
}


export async function DELETE(req) {
  const { name } = await req.json()

  try {
    await prisma.skill.delete({
      where: { name },
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting skill:', err)
    return NextResponse.json({ error: 'Error deleting skill' }, { status: 500 })
  }
}
