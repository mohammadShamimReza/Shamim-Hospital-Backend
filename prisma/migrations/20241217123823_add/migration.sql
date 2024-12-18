/*
  Warnings:

  - You are about to drop the `_AppointmentToPharmacy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AppointmentToPharmacy" DROP CONSTRAINT "_AppointmentToPharmacy_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToPharmacy" DROP CONSTRAINT "_AppointmentToPharmacy_B_fkey";

-- DropTable
DROP TABLE "_AppointmentToPharmacy";

-- CreateTable
CREATE TABLE "PharmacyOnAppointment" (
    "id" SERIAL NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "pharmacyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PharmacyOnAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PharmacyOnAppointment_appointmentId_pharmacyId_key" ON "PharmacyOnAppointment"("appointmentId", "pharmacyId");

-- AddForeignKey
ALTER TABLE "PharmacyOnAppointment" ADD CONSTRAINT "PharmacyOnAppointment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PharmacyOnAppointment" ADD CONSTRAINT "PharmacyOnAppointment_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "Pharmacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
