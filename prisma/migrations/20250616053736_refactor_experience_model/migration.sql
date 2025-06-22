-- CreateTable
CREATE TABLE "Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "location" TEXT,
    "isProject" BOOLEAN NOT NULL DEFAULT false,
    "parentExperienceId" INTEGER,
    "bullets" JSONB NOT NULL,
    "technologies" JSONB NOT NULL,
    CONSTRAINT "Experience_parentExperienceId_fkey" FOREIGN KEY ("parentExperienceId") REFERENCES "Experience" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
