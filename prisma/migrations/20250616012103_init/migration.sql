/*
  Warnings:

  - The primary key for the `Education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `awards` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `relevantCourses` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Education` table. All the data in the column will be lost.
  - You are about to alter the column `gpa` on the `Education` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `id` on the `Education` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Experience` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Experience` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `ExperienceProject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `technologies` on the `ExperienceProject` table. All the data in the column will be lost.
  - You are about to alter the column `experienceId` on the `ExperienceProject` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `ExperienceProject` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `ExperienceProjectBullet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `experienceProjectId` on the `ExperienceProjectBullet` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `ExperienceProjectBullet` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bullets` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `liveLink` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `technologies` on the `Project` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Skill` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Skill` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Made the column `gpa` on table `Education` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Award" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "educationId" INTEGER NOT NULL,
    CONSTRAINT "Award_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RelevantCourse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "educationId" INTEGER NOT NULL,
    CONSTRAINT "RelevantCourse_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectTechnology" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "experienceProjectId" INTEGER NOT NULL,
    CONSTRAINT "ProjectTechnology_experienceProjectId_fkey" FOREIGN KEY ("experienceProjectId") REFERENCES "ExperienceProject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectTech" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "ProjectTech_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectBullet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "ProjectBullet_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "degree" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "gpa" REAL NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL
);
INSERT INTO "new_Education" ("degree", "endDate", "gpa", "id", "schoolName", "startDate") SELECT "degree", "endDate", "gpa", "id", "schoolName", "startDate" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE TABLE "new_Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL
);
INSERT INTO "new_Experience" ("company", "endDate", "id", "location", "startDate", "title") SELECT "company", "endDate", "id", "location", "startDate", "title" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE TABLE "new_ExperienceProject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "experienceId" INTEGER NOT NULL,
    CONSTRAINT "ExperienceProject_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ExperienceProject" ("experienceId", "id", "name") SELECT "experienceId", "id", "name" FROM "ExperienceProject";
DROP TABLE "ExperienceProject";
ALTER TABLE "new_ExperienceProject" RENAME TO "ExperienceProject";
CREATE TABLE "new_ExperienceProjectBullet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "experienceProjectId" INTEGER NOT NULL,
    CONSTRAINT "ExperienceProjectBullet_experienceProjectId_fkey" FOREIGN KEY ("experienceProjectId") REFERENCES "ExperienceProject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ExperienceProjectBullet" ("experienceProjectId", "id", "text") SELECT "experienceProjectId", "id", "text" FROM "ExperienceProjectBullet";
DROP TABLE "ExperienceProjectBullet";
ALTER TABLE "new_ExperienceProjectBullet" RENAME TO "ExperienceProjectBullet";
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "githubLink" TEXT
);
INSERT INTO "new_Project" ("date", "githubLink", "id", "name") SELECT "date", "githubLink", "id", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Skill" ("category", "id", "name") SELECT "category", "id", "name" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
