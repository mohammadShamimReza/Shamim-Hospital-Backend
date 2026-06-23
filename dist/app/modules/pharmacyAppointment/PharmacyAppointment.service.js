import { prisma } from '../../../lib/prisma';
const createPharmacyAppointment = async (payload) => {
    const result = await prisma.pharmacyOnAppointment.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.pharmacyOnAppointment.findMany({
        include: {
            appointment: true,
            pharmacy: true,
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma.pharmacyOnAppointment.findUnique({
        where: {
            id,
        },
    });
    console.log(result, 'this is form pharmacyOnAppointment');
    return result;
};
const updatePharmacyAppointment = async (id, payload) => {
    const result = await prisma.pharmacyOnAppointment.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deletePharmacyAppointment = async (id) => {
    const result = await prisma.pharmacyOnAppointment.delete({
        where: {
            id,
        },
    });
    return result;
};
export const PharmacyAppointmentService = {
    createPharmacyAppointment,
    getAllFromDb,
    getById,
    updatePharmacyAppointment,
    deletePharmacyAppointment,
};
