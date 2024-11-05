/*
  Warnings:

  - You are about to drop the `prescription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "medication" DROP CONSTRAINT "medication_prescriptionId_fkey";

-- DropForeignKey
ALTER TABLE "prescription" DROP CONSTRAINT "prescription_appointmentId_fkey";

-- AlterTable
ALTER TABLE "appointment" ADD COLUMN     "prescription" TEXT;

-- DropTable
DROP TABLE "prescription";
