import { prisma } from '../../../lib/prisma.js';
const createBilling = async (payload) => {
    const result = await prisma.billing.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.billing.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.billing.findUnique({
        where: { id },
    });
    return result;
};
const updateBilling = async (id, payload) => {
    const { ...billingData } = payload;
    const result = await prisma.billing.update({
        where: { id },
        data: {
            ...billingData,
        },
    });
    return result;
};
const deleteBilling = async (id) => {
    const result = await prisma.billing.delete({
        where: { id },
    });
    return result;
};
export const BillingService = {
    createBilling,
    getAllFromDb,
    getById,
    updateBilling,
    deleteBilling,
};
