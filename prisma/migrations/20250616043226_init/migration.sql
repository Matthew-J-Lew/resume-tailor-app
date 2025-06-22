-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "degree" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "gpa" REAL NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "awards" JSONB,
    "relevantCourses" JSONB
);
