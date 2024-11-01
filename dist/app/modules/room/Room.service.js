import prisma from '../../../shared/prisma';
const createRoom = async (payload) => {
    const result = await prisma.room.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.room.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.room.findUnique({
        where: { id },
    });
    return result;
};
const updateRoom = async (id, payload) => {
    const result = await prisma.room.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteRoom = async (id) => {
    const result = await prisma.room.delete({
        where: { id },
    });
    return result;
};
export const RoomService = {
    createRoom,
    getAllFromDb,
    getById,
    updateRoom,
    deleteRoom,
};
