/*
  Warnings:

  - Added the required column `image` to the `Pharmacy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pharmacy" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_AppointmentToPharmacy" ADD CONSTRAINT "_AppointmentToPharmacy_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_AppointmentToPharmacy_AB_unique";
