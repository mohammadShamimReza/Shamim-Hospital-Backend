/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientId_fkey";

-- DropForeignKey
ALTER TABLE "prescription" DROP CONSTRAINT "prescription_appointmentId_fkey";

-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "serviceId" INTEGER;

-- DropTable
DROP TABLE "Appointment";

-- CreateTable
CREATE TABLE "appointment" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER,
    "patientId" INTEGER NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL,
    "serviceId" INTEGER,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescription" ADD CONSTRAINT "prescription_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
