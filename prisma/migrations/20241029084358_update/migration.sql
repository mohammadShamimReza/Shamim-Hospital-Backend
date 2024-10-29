/*
  Warnings:

  - Added the required column `bodyPart` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isEmergency` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceType` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialty` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service" ADD COLUMN     "bodyPart" TEXT NOT NULL,
ADD COLUMN     "isEmergency" BOOLEAN NOT NULL,
ADD COLUMN     "maxAppointments" INTEGER,
ADD COLUMN     "prerequisites" TEXT,
ADD COLUMN     "serviceType" TEXT NOT NULL,
ADD COLUMN     "specialty" TEXT NOT NULL;
