import { Admin } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAdmin = async (payload: Admin): Promise<Admin> => {
  const result = await prisma.admin.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Admin[]> => {
  const result = await prisma.admin.findMany({});
  return result;
};

const getById = async (id: number): Promise<Admin | null> => {
  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateAdmin = async (
  id: number,
  payload: Partial<Admin>,
): Promise<Admin> => {
  const result = await prisma.admin.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteAdmin = async (id: number): Promise<Admin> => {
  const result = await prisma.admin.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AdminService = {
  createAdmin,
  getAllFromDb,
  getById,
  updateAdmin,
  deleteAdmin,
};
