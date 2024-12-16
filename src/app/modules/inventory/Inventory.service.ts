import { Inventory } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createInventory = async (payload: Inventory): Promise<Inventory> => {
  const result = await prisma.inventory.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Inventory[]> => {
  const result = await prisma.inventory.findMany({});
  return result;
};

const getById = async (id: number): Promise<Inventory | null> => {
  const result = await prisma.inventory.findUnique({
    where: { id },
  });
  return result;
};

const updateInventory = async (
  id: number,
  payload: Partial<Inventory> & {
    addNurses?: number[]; // IDs of nurses to add to the inventory
    removeNurses?: number[]; // IDs of nurses to remove from the inventory
    addStaff?: number[]; // IDs of staff to add to the inventory
    removeStaff?: number[]; // IDs of staff to remove from the inventory
  },
): Promise<Inventory> => {
  const { ...inventoryData } = payload;

  const result = await prisma.inventory.update({
    where: { id },
    data: {
      ...inventoryData,
    },
  });
  return result;
};

const deleteInventory = async (id: number): Promise<Inventory> => {
  const result = await prisma.inventory.delete({
    where: { id },
  });
  return result;
};

export const InventoryService = {
  createInventory,
  getAllFromDb,
  getById,
  updateInventory,
  deleteInventory,
};
