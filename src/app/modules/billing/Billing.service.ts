import { Billing } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBilling = async (payload: Billing): Promise<Billing> => {
  const result = await prisma.billing.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Billing[]> => {
  const result = await prisma.billing.findMany({});
  return result;
};

const getById = async (id: number): Promise<Billing | null> => {
  const result = await prisma.billing.findUnique({
    where: { id },
  });
  return result;
};

const updateBilling = async (
  id: number,
  payload: Partial<Billing> & {
    addNurses?: number[]; // IDs of nurses to add to the billing
    removeNurses?: number[]; // IDs of nurses to remove from the billing
    addStaff?: number[]; // IDs of staff to add to the billing
    removeStaff?: number[]; // IDs of staff to remove from the billing
  },
): Promise<Billing> => {
  const { ...billingData } = payload;

  const result = await prisma.billing.update({
    where: { id },
    data: {
      ...billingData,
    },
  });
  return result;
};

const deleteBilling = async (id: number): Promise<Billing> => {
  const result = await prisma.billing.delete({
    where: { id },
  });
  return result;
};

export const BillingService = {
  createBilling,
  getAllFromDb,
  getById,
  updateBilling,
  deleteBilling,
};
