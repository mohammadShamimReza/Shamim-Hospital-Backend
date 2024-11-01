import prisma from '../../../shared/prisma';
const createService = async (payload) => {
    const result = await prisma.service.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.service.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.service.findUnique({
        where: { id },
    });
    return result;
};
const updateService = async (id, payload) => {
    const result = await prisma.service.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteService = async (id) => {
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
