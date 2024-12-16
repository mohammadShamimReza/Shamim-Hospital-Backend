import { Asset } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAsset = async (payload: Asset): Promise<Asset> => {
  const result = await prisma.asset.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Asset[]> => {
  const result = await prisma.asset.findMany({});
  return result;
};

const getById = async (id: number): Promise<Asset | null> => {
  const result = await prisma.asset.findUnique({
    where: { id },
  });
  return result;
};

const updateAsset = async (
  id: number,
  payload: Partial<Asset> & {
    addNurses?: number[]; // IDs of nurses to add to the asset
    removeNurses?: number[]; // IDs of nurses to remove from the asset
    addStaff?: number[]; // IDs of staff to add to the asset
    removeStaff?: number[]; // IDs of staff to remove from the asset
  },
): Promise<Asset> => {
  const { ...assetData } = payload;

  const result = await prisma.asset.update({
    where: { id },
    data: {
      ...assetData,
    },
  });
  return result;
};

const deleteAsset = async (id: number): Promise<Asset> => {
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
