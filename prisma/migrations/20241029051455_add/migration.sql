/*
  Warnings:

  - Added the required column `designation` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passingYear` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workplace` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "passingYear" TEXT NOT NULL,
ADD COLUMN     "workplace" TEXT NOT NULL;
