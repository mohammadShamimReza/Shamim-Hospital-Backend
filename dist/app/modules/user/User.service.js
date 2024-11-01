import prisma from '../../../shared/prisma';
const getAllFromDb = async () => {
    const result = await prisma.user.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateUser = async (id, payload) => {
    const result = await prisma.user.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteUsesr = async (id) => {
    const result = await prisma.user.delete({
        where: {
            id,
        },
    });
    return result;
};
export const userService = {
    getAllFromDb,
    getById,
    updateUser,
    deleteUsesr,
};
