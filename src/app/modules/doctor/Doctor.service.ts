import { Doctor } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createDoctor = async (payload: Doctor): Promise<Doctor> => {
  const result = await prisma.doctor.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Doctor[]> => {
  const result = await prisma.doctor.findMany({});
  return result;
};
const getById = async (id: number): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      
      appointments: {
        select: {
          
          id: true,
          appointmentDate: true,
          prescription: true,
          patient: true,
          Service: true,
        },
      },
    },
  });
  return result;
};

const updateDoctor = async (
  id: number,
  payload: Partial<Doctor>,
): Promise<Doctor> => {
  const result = await prisma.doctor.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteDoctor = async (id: number): Promise<Doctor> => {
  const result = await prisma.doctor.delete({
    where: {
      id,
    },
  });
  return result;
};

export const DoctorService = {
  createDoctor,
  getAllFromDb,
  getById,
  updateDoctor,
  deleteDoctor,
};
