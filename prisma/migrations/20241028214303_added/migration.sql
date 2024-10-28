-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "departmentId" INTEGER,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
