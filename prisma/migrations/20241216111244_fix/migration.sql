/*
  Warnings:

  - You are about to drop the column `appointmentId` on the `Laboratory` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `Laboratory` table. All the data in the column will be lost.
  - You are about to drop the column `testDate` on the `Laboratory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Laboratory" DROP CONSTRAINT "Laboratory_appointmentId_fkey";

-- AlterTable
ALTER TABLE "Laboratory" DROP COLUMN "appointmentId",
DROP COLUMN "result",
DROP COLUMN "testDate";

-- CreateTable
CREATE TABLE "LabAppointment" (
    "id" SERIAL NOT NULL,
    "laboratoryId" INTEGER NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "testDate" TEXT NOT NULL,
    "result" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabAppointment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LabAppointment" ADD CONSTRAINT "LabAppointment_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "Laboratory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabAppointment" ADD CONSTRAINT "LabAppointment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
