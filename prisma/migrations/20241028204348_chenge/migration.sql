/*
  Warnings:

  - You are about to drop the `Medication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Prescription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Medication" DROP CONSTRAINT "Medication_prescriptionId_fkey";

-- DropForeignKey
ALTER TABLE "Prescription" DROP CONSTRAINT "Prescription_appointmentId_fkey";

-- DropTable
DROP TABLE "Medication";

-- DropTable
DROP TABLE "Prescription";

-- CreateTable
CREATE TABLE "prescription" (
    "id" SERIAL NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "prescriptionId" INTEGER NOT NULL,

    CONSTRAINT "medication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prescription_appointmentId_key" ON "prescription"("appointmentId");

-- AddForeignKey
ALTER TABLE "prescription" ADD CONSTRAINT "prescription_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medication" ADD CONSTRAINT "medication_prescriptionId_fkey" FOREIGN KEY ("prescriptionId") REFERENCES "prescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
