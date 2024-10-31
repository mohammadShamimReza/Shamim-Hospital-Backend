import { Nurse } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createNurse = async (payload: Nurse): Promise<Nurse> => {
  const result = await prisma.nurse.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Nurse[]> => {
  const result = await prisma.nurse.findMany({});
  return result;
};

const getById = async (id: number): Promise<Nurse | null> => {
  const result = await prisma.nurse.findUnique({
    where: {
      id,
    },
    include: {
      room: true,
    }
  });
  return result;
};

const updateNurse = async (
  id: number,
  payload: Partial<Nurse>,
): Promise<Nurse> => {
  const result = await prisma.nurse.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteNurse = async (id: number): Promise<Nurse> => {
  const result = await prisma.nurse.delete({
    where: {
      id,
    },
  });
  return result;
};

export const NurseService = {
  createNurse,
  getAllFromDb,
  getById,
  updateNurse,
  deleteNurse,
};
