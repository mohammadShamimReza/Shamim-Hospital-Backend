import prisma from '../../../shared/prisma';
const createPrescription = async (payload) => {
    const result = await prisma.prescription.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.prescription.findMany({
        include: {
            medications: true, // include related medications if needed
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma.prescription.findUnique({
        where: { id },
        include: {
            medications: true, // include related medications if needed
        },
    });
    return result;
};
const updatePrescription = async (id, payload) => {
    const result = await prisma.prescription.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deletePrescription = async (id) => {
    const result = await prisma.prescription.delete({
        where: { id },
    });
    return result;
};
export const PrescriptionService = {
    createPrescription,
    getAllFromDb,
    getById,
    updatePrescription,
    deletePrescription,
};
