import { PharmacyOnAppointment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPharmacyAppointment = async (
  payload: PharmacyOnAppointment,
): Promise<PharmacyOnAppointment> => {
  const result = await prisma.pharmacyOnAppointment.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<PharmacyOnAppointment[]> => {
  const result = await prisma.pharmacyOnAppointment.findMany({
    include: {
      appointment: true,
      pharmacy: true,
    },
  });
  return result;
};
const getById = async (id: number): Promise<PharmacyOnAppointment | null> => {
  const result = await prisma.pharmacyOnAppointment.findUnique({
    where: {
      id,
    },
  });
  console.log(result, 'this is form pharmacyOnAppointment');
  return result;
};

const updatePharmacyAppointment = async (
  id: number,
  payload: Partial<PharmacyOnAppointment>,
): Promise<PharmacyOnAppointment> => {
  const result = await prisma.pharmacyOnAppointment.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deletePharmacyAppointment = async (
  id: number,
): Promise<PharmacyOnAppointment> => {
  const result = await prisma.pharmacyOnAppointment.delete({
    where: {
      id,
    },
  });
  return result;
};

export const PharmacyAppointmentService = {
  createPharmacyAppointment,
  getAllFromDb,
  getById,
  updatePharmacyAppointment,
  deletePharmacyAppointment,
};
