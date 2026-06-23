import { prisma } from '../../../lib/prisma';
const createInventory = async (payload) => {
    const result = await prisma.inventory.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.inventory.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.inventory.findUnique({
        where: { id },
    });
    return result;
};
const updateInventory = async (id, payload) => {
    const { ...inventoryData } = payload;
    const result = await prisma.inventory.update({
        where: { id },
        data: {
            ...inventoryData,
        },
    });
    return result;
};
const deleteInventory = async (id) => {
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
