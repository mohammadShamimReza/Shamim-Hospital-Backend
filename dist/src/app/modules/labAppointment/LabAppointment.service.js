import { prisma } from '../../../lib/prisma';
const createLabAppointment = async (payload) => {
    const result = await prisma.labAppointment.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.labAppointment.findMany({
        include: {
            appointment: true,
            laboratory: true,
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma.labAppointment.findUnique({
        where: {
            id,
        },
    });
    console.log(result, 'this is form labAppointment');
    return result;
};
const updateLabAppointment = async (id, payload) => {
    const result = await prisma.labAppointment.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteLabAppointment = async (id) => {
    const result = await prisma.labAppointment.delete({
        where: {
            id,
        },
    });
    return result;
};
export const LabAppointmentService = {
    createLabAppointment,
    getAllFromDb,
    getById,
    updateLabAppointment,
    deleteLabAppointment,
};
