import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Inserts parsed resume data into the database using upsert to avoid duplicates
export async function insertParsedResume(parsedData) {
  const { education, skills, experience, experience_projects, projects } = parsedData

  // Insert or update each education entry based on schoolName + degree uniqueness
  for (const edu of education) {
    await prisma.education.upsert({
      where: {
        schoolName_degree: {
          schoolName: edu.school_name,
          degree: edu.degree,
        },
      },
      update: {
        gpa: parseFloat(edu.gpa),             // Update GPA (converted to float)
        startDate: edu.start_date,             // Update start date
        endDate: edu.end_date,                 // Update end date
        awards: edu.awards || [],              // Update awards or default empty array
        relevantCourses: edu.relevant_courses || [], // Update courses or empty array
      },
      create: {
        degree: edu.degree,                    // Create with degree
        schoolName: edu.school_name,           // Create with school name
        gpa: parseFloat(edu.gpa),              // Create GPA as float
        startDate: edu.start_date,              // Create start date
        endDate: edu.end_date,                  // Create end date
        awards: edu.awards || [],               // Create awards or empty array
        relevantCourses: edu.relevant_courses || [], // Create courses or empty array
      },
    })
  }

  // Insert or update each skill by unique skill name
  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {
        type: skill.type || null,              // Update type or null if missing
      },
      create: {
        name: skill.name,                      // Create skill name
        type: skill.type || null,              // Create type or null
      },
    })
  }

  // Insert or update each job experience, uniquely identified by jobTitle + companyName + startDate
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
        endDate: job.endDate,                  // Update end date
        location: job.location || null,        // Update location or null
        isProject: job.isProject,              // Update if it's a project role
        bullets: job.bullets || [],            // Update job description bullet points
        technologies: job.technologies || [],  // Update technologies used
      },
      create: {
        jobTitle: job.jobTitle,                // Create job title
        companyName: job.companyName,          // Create company name
        startDate: job.startDate,              // Create start date
        endDate: job.endDate,                  // Create end date
        location: job.location || null,        // Create location or null
        isProject: job.isProject,              // Create isProject flag
        bullets: job.bullets || [],            // Create bullets array
        technologies: job.technologies || [],  // Create technologies array
      },
    })
  }

  // Insert or update projects uniquely by projectName with additional fields like githubUrl
  for (const project of projects) {
    await prisma.project.upsert({
      where: {
        projectName: project.projectName,
      },
      update: {
        bullets: project.bullets || [],         // Update description bullets
        technologies: project.technologies || [], // Update technologies used
        startDate: project.startDate || null,    // Update start date or null
        endDate: project.endDate || null,        // Update end date or null
        githubUrl: project.githubUrl || null,    // Update GitHub repo URL or null
      },
      create: {
        projectName: project.projectName,         // Create project name
        bullets: project.bullets || [],            // Create description bullets
        technologies: project.technologies || [],  // Create technologies
        startDate: project.startDate || null,      // Create start date or null
        endDate: project.endDate || null,          // Create end date or null
        githubUrl: project.githubUrl || null,      // Create GitHub URL or null
      },
    })
  }
}
