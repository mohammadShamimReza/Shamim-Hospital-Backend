import { Inventory } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { InventoryService } from './Inventory.service';

const createInventory = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await InventoryService.createInventory(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Inventory created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await InventoryService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Inventorys fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InventoryService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Inventory fetched successfully',
    data: result,
  });
});

const updateInventory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await InventoryService.updateInventory(Number(id), payload);

  sendResponse<Inventory>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Inventory updated successfully',
    data: result,
  });
});

const deleteInventory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await InventoryService.deleteInventory(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Inventory deleted successfully',
    data: result,
  });
});

export const InventoryController = {
  createInventory,
  getAllFromDB,
  getById,
  updateInventory,
  deleteInventory,
};
