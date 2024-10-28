/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `nurse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "nurse" ADD COLUMN     "role" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "Patient";
