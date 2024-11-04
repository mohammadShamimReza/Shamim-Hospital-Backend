/*
  Warnings:

  - Made the column `doctorId` on table `appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `serviceId` on table `appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_serviceId_fkey";

-- AlterTable
ALTER TABLE "appointment" ALTER COLUMN "doctorId" SET NOT NULL,
ALTER COLUMN "serviceId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
