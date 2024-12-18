import { LabAppointment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createLabAppointment = async (
  payload: LabAppointment,
): Promise<LabAppointment> => {
  const result = await prisma.labAppointment.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<LabAppointment[]> => {
  const result = await prisma.labAppointment.findMany({
    include: {
      appointment: true,
      laboratory: true,
    },
  });
  return result;
};
const getById = async (id: number): Promise<LabAppointment | null> => {
  const result = await prisma.labAppointment.findUnique({
    where: {
      id,
    },
  });
  console.log(result, 'this is form labAppointment');
  return result;
};

const updateLabAppointment = async (
  id: number,
  payload: Partial<LabAppointment>,
): Promise<LabAppointment> => {
  const result = await prisma.labAppointment.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteLabAppointment = async (id: number): Promise<LabAppointment> => {
  const result = await prisma.labAppointment.delete({
    where: {
      id,
    },
  });
  return result;
};

export const LabAppointmentService = {
  createLabAppointment,
  getAllFromDb,
  getById,
  updateLabAppointment,
  deleteLabAppointment,
};
