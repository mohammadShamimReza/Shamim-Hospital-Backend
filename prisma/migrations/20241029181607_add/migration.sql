/*
  Warnings:

  - You are about to drop the column `maxAppointments` on the `service` table. All the data in the column will be lost.
  - Added the required column `phone` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `nurse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "nurse" ADD COLUMN     "phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "service" DROP COLUMN "maxAppointments";

-- AlterTable
ALTER TABLE "staff" ADD COLUMN     "phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "phone" INTEGER NOT NULL;
