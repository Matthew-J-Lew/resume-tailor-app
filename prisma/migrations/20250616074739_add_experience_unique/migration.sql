/*
  Warnings:

  - You are about to drop the column `parentExperienceId` on the `Experience` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "location" TEXT,
    "isProject" BOOLEAN NOT NULL,
    "bullets" JSONB NOT NULL,
    "technologies" JSONB
);
INSERT INTO "new_Experience" ("bullets", "companyName", "endDate", "id", "isProject", "jobTitle", "location", "startDate", "technologies") SELECT "bullets", "companyName", "endDate", "id", "isProject", "jobTitle", "location", "startDate", "technologies" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE UNIQUE INDEX "Experience_jobTitle_companyName_startDate_key" ON "Experience"("jobTitle", "companyName", "startDate");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
