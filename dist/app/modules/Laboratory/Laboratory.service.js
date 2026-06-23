import { prisma } from '../../../lib/prisma';
const createLaboratory = async (payload) => {
    const result = await prisma.laboratory.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.laboratory.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.laboratory.findUnique({
        where: { id },
    });
    return result;
};
const updateLaboratory = async (id, payload) => {
    const { ...laboratoryData } = payload;
    const result = await prisma.laboratory.update({
        where: { id },
        data: {
            ...laboratoryData,
        },
    });
    return result;
};
const deleteLaboratory = async (id) => {
    const result = await prisma.laboratory.delete({
        where: { id },
    });
    return result;
};
export const LaboratoryService = {
    createLaboratory,
    getAllFromDb,
    getById,
    updateLaboratory,
    deleteLaboratory,
};
