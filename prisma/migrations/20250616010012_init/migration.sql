-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "gpa" TEXT,
    "awards" TEXT,
    "relevantCourses" TEXT,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ExperienceProject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "experienceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "technologies" TEXT,
    CONSTRAINT "ExperienceProject_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExperienceProjectBullet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "experienceProjectId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "ExperienceProjectBullet_experienceProjectId_fkey" FOREIGN KEY ("experienceProjectId") REFERENCES "ExperienceProject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "bullets" TEXT,
    "technologies" TEXT,
    "githubLink" TEXT,
    "liveLink" TEXT,
    "date" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
