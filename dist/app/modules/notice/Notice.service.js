import prisma from '../../../shared/prisma';
const createNotice = async (payload) => {
    const result = await prisma.notice.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.notice.findMany();
    return result;
};
const getById = async (id) => {
    const result = await prisma.notice.findUnique({
        where: { id },
    });
    return result;
};
const updateNotice = async (id, payload) => {
    const result = await prisma.notice.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteNotice = async (id) => {
    const result = await prisma.notice.delete({
        where: { id },
    });
    return result;
};
export const NoticeService = {
    createNotice,
    getAllFromDb,
    getById,
    updateNotice,
    deleteNotice,
};
