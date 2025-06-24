-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT NOT NULL,
    "bullets" JSONB NOT NULL,
    "technologies" JSONB NOT NULL,
    "startDate" TEXT,
    "endDate" TEXT
);
INSERT INTO "new_Project" ("bullets", "endDate", "id", "projectName", "startDate", "technologies") SELECT "bullets", "endDate", "id", "projectName", "startDate", "technologies" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_projectName_key" ON "Project"("projectName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
