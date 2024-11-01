import prisma from '../../../shared/prisma';
const createAdmin = async (payload) => {
    const result = await prisma.admin.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.admin.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.admin.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateAdmin = async (id, payload) => {
    const result = await prisma.admin.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteAdmin = async (id) => {
    const result = await prisma.admin.delete({
        where: {
            id,
        },
    });
    return result;
};
export const AdminService = {
    createAdmin,
    getAllFromDb,
    getById,
    updateAdmin,
    deleteAdmin,
};
