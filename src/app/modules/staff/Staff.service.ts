import { Staff } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createStaff = async (payload: Staff): Promise<Staff> => {
  const result = await prisma.staff.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Staff[]> => {
  const result = await prisma.staff.findMany({});
  return result;
};

const getById = async (id: number): Promise<Staff | null> => {
  const result = await prisma.staff.findUnique({
    where: {
      id,
    },
    include: {
      room: true,
    }
  });
  return result;
};

const updateStaff = async (
  id: number,
  payload: Partial<Staff>,
): Promise<Staff> => {
  const result = await prisma.staff.update({
    where: {
      id,
    },
    data: payload,
  });
  console.log(result, 'staff updated');
  return result;
};

const deleteStaff = async (id: number): Promise<Staff> => {
  const result = await prisma.staff.delete({
    where: {
      id,
    },
  });
  return result;
};

export const StaffService = {
  createStaff,
  getAllFromDb,
  getById,
  updateStaff,
  deleteStaff,
};
