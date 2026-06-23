import { prisma } from '../../../lib/prisma';
const createStaff = async (payload) => {
    const result = await prisma.staff.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.staff.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.staff.findUnique({
        where: {
            id,
        },
        include: {
            room: true,
        },
    });
    return result;
};
const updateStaff = async (id, payload) => {
    const result = await prisma.staff.update({
        where: {
            id,
        },
        data: payload,
    });
    console.log(result, 'staff updated');
    return result;
};
const deleteStaff = async (id) => {
    const result = await prisma.staff.delete({
        where: {
            id,
        },
    });
    return result;
};
export const StaffService = {
    createStaff,
    getAllFromDb,
    getById,
    updateStaff,
    deleteStaff,
};
