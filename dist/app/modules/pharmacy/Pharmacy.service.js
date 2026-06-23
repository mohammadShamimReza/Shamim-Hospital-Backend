import { prisma } from '../../../lib/prisma';
const createPharmacy = async (payload) => {
    const result = await prisma.pharmacy.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.pharmacy.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.pharmacy.findUnique({
        where: { id },
    });
    return result;
};
const updatePharmacy = async (id, payload) => {
    const { ...pharmacyData } = payload;
    const result = await prisma.pharmacy.update({
        where: { id },
        data: {
            ...pharmacyData,
        },
    });
    return result;
};
const deletePharmacy = async (id) => {
    const result = await prisma.pharmacy.delete({
        where: { id },
    });
    return result;
};
export const PharmacyService = {
    createPharmacy,
    getAllFromDb,
    getById,
    updatePharmacy,
    deletePharmacy,
};
