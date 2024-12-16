import { Asset } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AssetService } from './Asset.service';

const createAsset = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await AssetService.createAsset(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Asset created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AssetService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Assets fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AssetService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Asset fetched successfully',
    data: result,
  });
});

const updateAsset = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await AssetService.updateAsset(Number(id), payload);

  sendResponse<Asset>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Asset updated successfully',
    data: result,
  });
});

const deleteAsset = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AssetService.deleteAsset(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Asset deleted successfully',
    data: result,
  });
});

export const AssetController = {
  createAsset,
  getAllFromDB,
  getById,
  updateAsset,
  deleteAsset,
};
