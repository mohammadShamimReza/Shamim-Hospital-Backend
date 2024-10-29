/*
  Warnings:

  - You are about to drop the column `departmentId` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `room` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `service` table. All the data in the column will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "room" DROP CONSTRAINT "room_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_departmentId_fkey";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "departmentId";

-- AlterTable
ALTER TABLE "room" DROP COLUMN "departmentId";

-- AlterTable
ALTER TABLE "service" DROP COLUMN "departmentId";

-- DropTable
DROP TABLE "department";
