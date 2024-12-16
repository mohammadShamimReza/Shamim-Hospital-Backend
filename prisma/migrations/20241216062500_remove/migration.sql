/*
  Warnings:

  - You are about to drop the column `status` on the `Diagnostic` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Laboratory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diagnostic" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Laboratory" DROP COLUMN "status";
