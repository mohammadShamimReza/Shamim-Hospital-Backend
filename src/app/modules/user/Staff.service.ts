import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';



const getAllFromDb = async (): Promise<User[]> => {
  const result = await prisma.staff.findMany({});
  return result;
};

const getById = async (id: number): Promise<User | null> => {
  const result = await prisma.staff.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateUser = async (
  id: number,
  payload: Partial<User>,
): Promise<User> => {
  const result = await prisma.staff.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteUsesr = async (id: number): Promise<User> => {
  const result = await prisma.staff.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  getAllFromDb,
  getById,
  updateUser,
  deleteUsesr,
};
