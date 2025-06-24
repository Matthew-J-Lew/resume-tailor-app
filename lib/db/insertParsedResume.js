import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function insertParsedResume(parsedData) {
  const { education, skills, experience, experience_projects, projects } = parsedData

  // Insert education entries
  for (const edu of education) {
    await prisma.education.upsert({
      where: {
        schoolName_degree: {
          schoolName: edu.school_name,
          degree: edu.degree,
        },
      },
      update: {
        gpa: parseFloat(edu.gpa),
        startDate: edu.start_date,
        endDate: edu.end_date,
        awards: edu.awards || [],
        relevantCourses: edu.relevant_courses || [],
      },
      create: {
        degree: edu.degree,
        schoolName: edu.school_name,
        gpa: parseFloat(edu.gpa),
        startDate: edu.start_date,
        endDate: edu.end_date,
        awards: edu.awards || [],
        relevantCourses: edu.relevant_courses || [],
      },
    })
  }

  // Insert skills
  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {
        type: skill.type || null,
      },
      create: {
        name: skill.name,
        type: skill.type || null,
      },
    })
  }

  // Insert experience
  for (const job of experience) {
    await prisma.experience.upsert({
      where: {
        jobTitle_companyName_startDate: {
          jobTitle: job.jobTitle,
          companyName: job.companyName,
          startDate: job.startDate,
        },
      },
      update: {
        endDate: job.endDate,
        location: job.location || null,
        isProject: job.isProject,
        bullets: job.bullets || [],
        technologies: job.technologies || [],
      },
      create: {
        jobTitle: job.jobTitle,
        companyName: job.companyName,
        startDate: job.startDate,
        endDate: job.endDate,
        location: job.location || null,
        isProject: job.isProject,
        bullets: job.bullets || [],
        technologies: job.technologies || [],
      },
    })
  }

  // Insert projects (with support for new fields)
  for (const project of projects) {
    await prisma.project.upsert({
      where: {
        projectName: project.projectName,
      },
      update: {
        bullets: project.bullets || [],
        technologies: project.technologies || [],
        startDate: project.startDate || null,
        endDate: project.endDate || null,
        githubUrl: project.githubUrl || null,
      },
      create: {
        projectName: project.projectName,
        bullets: project.bullets || [],
        technologies: project.technologies || [],
        startDate: project.startDate || null,
        endDate: project.endDate || null,
        githubUrl: project.githubUrl || null,
      },
    })
  }
}
