import { prisma } from '../../../lib/prisma';
const createRoom = async (payload) => {
    const result = await prisma.room.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.room.findMany({
        include: {
            nurses: true,
            staff: true,
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma.room.findUnique({
        where: { id },
    });
    return result;
};
const updateRoom = async (id, payload) => {
    const { addNurses, removeNurses, addStaff, removeStaff, ...roomData } = payload;
    const result = await prisma.room.update({
        where: { id },
        data: {
            ...roomData,
            nurses: {
                connect: addNurses?.map(nurseId => ({ id: nurseId })) || [],
                disconnect: removeNurses?.map(nurseId => ({ id: nurseId })) || [],
            },
            staff: {
                connect: addStaff?.map(staffId => ({ id: staffId })) || [],
                disconnect: removeStaff?.map(staffId => ({ id: staffId })) || [],
            },
        },
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
