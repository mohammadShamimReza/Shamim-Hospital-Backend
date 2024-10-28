/*
  Warnings:

  - You are about to drop the column `departmentId` on the `nurse` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "nurse" DROP CONSTRAINT "nurse_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_departmentId_fkey";

-- AlterTable
ALTER TABLE "nurse" DROP COLUMN "departmentId",
ADD COLUMN     "roomId" INTEGER;

-- AlterTable
ALTER TABLE "staff" DROP COLUMN "departmentId",
ADD COLUMN     "roomId" INTEGER;

-- DropTable
DROP TABLE "Department";

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nurses" INTEGER NOT NULL,
    "staff" INTEGER NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "roomNumber" TEXT NOT NULL,
    "departmentId" INTEGER,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nurse" ADD CONSTRAINT "nurse_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
