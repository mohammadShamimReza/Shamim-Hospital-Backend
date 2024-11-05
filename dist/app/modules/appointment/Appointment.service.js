import prisma from "../../../shared/prisma";
const createAppointment = async (payload) => {
    const result = await prisma.appointment.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.appointment.findMany({
        include: {
            patient: true,
            doctor: true,
            Service: true,
        }
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma.appointment.findUnique({
        where: {
            id
        },
    });
    return result;
};
const updateAppointment = async (id, payload) => {
    const result = await prisma.appointment.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteAppointment = async (id) => {
    const result = await prisma.appointment.delete({
        where: {
            id,
        },
    });
    return result;
};
export const AppointmentService = {
    createAppointment,
    getAllFromDb,
    getById,
    updateAppointment,
    deleteAppointment,
};
