import { Laboratory } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createLaboratory = async (payload: Laboratory): Promise<Laboratory> => {
  const result = await prisma.laboratory.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Laboratory[]> => {
  const result = await prisma.laboratory.findMany({});
  return result;
};

const getById = async (id: number): Promise<Laboratory | null> => {
  const result = await prisma.laboratory.findUnique({
    where: { id },
  });
  return result;
};

const updateLaboratory = async (
  id: number,
  payload: Partial<Laboratory> & {
    addNurses?: number[]; // IDs of nurses to add to the laboratory
    removeNurses?: number[]; // IDs of nurses to remove from the laboratory
    addStaff?: number[]; // IDs of staff to add to the laboratory
    removeStaff?: number[]; // IDs of staff to remove from the laboratory
  },
): Promise<Laboratory> => {
  const { ...laboratoryData } = payload;

  const result = await prisma.laboratory.update({
    where: { id },
    data: {
      ...laboratoryData,
    },
  });
  return result;
};

const deleteLaboratory = async (id: number): Promise<Laboratory> => {
  const result = await prisma.laboratory.delete({
    where: { id },
  });
  return result;
};

export const LaboratoryService = {
  createLaboratory,
  getAllFromDb,
  getById,
  updateLaboratory,
  deleteLaboratory,
};
