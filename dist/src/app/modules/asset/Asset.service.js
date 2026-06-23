import { prisma } from '../../../lib/prisma';
const createAsset = async (payload) => {
    const result = await prisma.asset.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.asset.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.asset.findUnique({
        where: { id },
    });
    return result;
};
const updateAsset = async (id, payload) => {
    const { ...assetData } = payload;
    const result = await prisma.asset.update({
        where: { id },
        data: {
            ...assetData,
        },
    });
    return result;
};
const deleteAsset = async (id) => {
    const result = await prisma.asset.delete({
        where: { id },
    });
    return result;
};
export const AssetService = {
    createAsset,
    getAllFromDb,
    getById,
    updateAsset,
    deleteAsset,
};
