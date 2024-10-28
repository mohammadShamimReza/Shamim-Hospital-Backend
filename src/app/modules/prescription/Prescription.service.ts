import { Prescription } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPrescription = async (
  payload: Prescription,
): Promise<Prescription> => {
  const result = await prisma.prescription.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Prescription[]> => {
  const result = await prisma.prescription.findMany({
    include: {
      medications: true, // include related medications if needed
    },
  });
  return result;
};

const getById = async (id: number): Promise<Prescription | null> => {
  const result = await prisma.prescription.findUnique({
    where: { id },
    include: {
      medications: true, // include related medications if needed
    },
  });
  return result;
};

const updatePrescription = async (
  id: number,
  payload: Partial<Prescription>,
): Promise<Prescription> => {
  const result = await prisma.prescription.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deletePrescription = async (id: number): Promise<Prescription> => {
  const result = await prisma.prescription.delete({
    where: { id },
  });
  return result;
};

export const PrescriptionService = {
  createPrescription,
  getAllFromDb,
  getById,
  updatePrescription,
  deletePrescription,
};
