import { Pharmacy } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPharmacy = async (payload: Pharmacy): Promise<Pharmacy> => {
  const result = await prisma.pharmacy.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Pharmacy[]> => {
  const result = await prisma.pharmacy.findMany({});
  return result;
};

const getById = async (id: number): Promise<Pharmacy | null> => {
  const result = await prisma.pharmacy.findUnique({
    where: { id },
  });
  return result;
};

const updatePharmacy = async (
  id: number,
  payload: Partial<Pharmacy> & {
    addNurses?: number[]; // IDs of nurses to add to the pharmacy
    removeNurses?: number[]; // IDs of nurses to remove from the pharmacy
    addStaff?: number[]; // IDs of staff to add to the pharmacy
    removeStaff?: number[]; // IDs of staff to remove from the pharmacy
  },
): Promise<Pharmacy> => {
  const { ...pharmacyData } = payload;

  const result = await prisma.pharmacy.update({
    where: { id },
    data: {
      ...pharmacyData,
    },
  });
  return result;
};

const deletePharmacy = async (id: number): Promise<Pharmacy> => {
  const result = await prisma.pharmacy.delete({
    where: { id },
  });
  return result;
};

export const PharmacyService = {
  createPharmacy,
  getAllFromDb,
  getById,
  updatePharmacy,
  deletePharmacy,
};
