import { Department } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createDepartment = async (payload: Department): Promise<Department> => {
  const result = await prisma.department.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Department[]> => {
  const result = await prisma.department.findMany({
    include: {
      room: true, // include related rooms if necessary
    },
  });
  return result;
};

const getById = async (id: number): Promise<Department | null> => {
  const result = await prisma.department.findUnique({
    where: { id },
    include: {
      room: true, // include related rooms if necessary
    },
  });
  return result;
};

const updateDepartment = async (
  id: number,
  payload: Partial<Department>,
): Promise<Department> => {
  const result = await prisma.department.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteDepartment = async (id: number): Promise<Department> => {
  const result = await prisma.department.delete({
    where: { id },
  });
  return result;
};

export const DepartmentService = {
  createDepartment,
  getAllFromDb,
  getById,
  updateDepartment,
  deleteDepartment,
};
