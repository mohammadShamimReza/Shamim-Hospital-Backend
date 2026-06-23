import { prisma } from '../../../lib/prisma.js';
const createDiagnostic = async (payload) => {
    const result = await prisma.diagnostic.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.diagnostic.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.diagnostic.findUnique({
        where: { id },
    });
    return result;
};
const updateDiagnostic = async (id, payload) => {
    const { ...diagnosticData } = payload;
    const result = await prisma.diagnostic.update({
        where: { id },
        data: {
            ...diagnosticData,
        },
    });
    return result;
};
const deleteDiagnostic = async (id) => {
    const result = await prisma.diagnostic.delete({
        where: { id },
    });
    return result;
};
export const DiagnosticService = {
    createDiagnostic,
    getAllFromDb,
    getById,
    updateDiagnostic,
    deleteDiagnostic,
};
