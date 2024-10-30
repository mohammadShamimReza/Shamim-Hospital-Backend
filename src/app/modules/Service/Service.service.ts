import { Service } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createService = async (payload: Service): Promise<Service> => {
  const result = await prisma.service.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Service[]> => {
  const result = await prisma.service.findMany({
   
  });
  return result;
};

const getById = async (id: number): Promise<Service | null> => {
  const result = await prisma.service.findUnique({
    where: { id },
    
  });
  return result;
};

const updateService = async (
  id: number,
  payload: Partial<Service>,
): Promise<Service> => {
  const result = await prisma.service.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteService = async (id: number): Promise<Service> => {
  const result = await prisma.service.delete({
    where: { id },
  });
  return result;
};

export const ServiceService = {
  createService,
  getAllFromDb,
  getById,
  updateService,
  deleteService,
};
