import prisma from '../../../shared/prisma';
const createMedication = async (payload) => {
    const result = await prisma.medication.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.medication.findMany({
        include: {
            prescription: true, // include related prescription if needed
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma.medication.findUnique({
        where: { id },
        include: {
            prescription: true, // include related prescription if needed
        },
    });
    return result;
};
const updateMedication = async (id, payload) => {
    const result = await prisma.medication.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteMedication = async (id) => {
    const result = await prisma.medication.delete({
        where: { id },
    });
    return result;
};
export const MedicationService = {
    createMedication,
    getAllFromDb,
    getById,
    updateMedication,
    deleteMedication,
};
