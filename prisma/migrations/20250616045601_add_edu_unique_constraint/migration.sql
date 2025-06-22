/*
  Warnings:

  - A unique constraint covering the columns `[schoolName,degree]` on the table `Education` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Education_schoolName_degree_key" ON "Education"("schoolName", "degree");
