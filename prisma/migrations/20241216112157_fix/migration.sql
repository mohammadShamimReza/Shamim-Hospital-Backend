/*
  Warnings:

  - You are about to drop the column `appointmentId` on the `Diagnostic` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `Diagnostic` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Diagnostic" DROP CONSTRAINT "Diagnostic_appointmentId_fkey";

-- AlterTable
ALTER TABLE "Diagnostic" DROP COLUMN "appointmentId",
DROP COLUMN "result";

-- CreateTable
CREATE TABLE "DiagnosticAppointment" (
    "id" SERIAL NOT NULL,
    "diagnosticId" INTEGER NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "result" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiagnosticAppointment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DiagnosticAppointment" ADD CONSTRAINT "DiagnosticAppointment_diagnosticId_fkey" FOREIGN KEY ("diagnosticId") REFERENCES "Diagnostic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiagnosticAppointment" ADD CONSTRAINT "DiagnosticAppointment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
