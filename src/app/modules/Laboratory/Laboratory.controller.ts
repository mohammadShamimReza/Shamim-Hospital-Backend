import { Laboratory } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LaboratoryService } from './Laboratory.service';

const createLaboratory = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await LaboratoryService.createLaboratory(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Laboratory created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await LaboratoryService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Laboratorys fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LaboratoryService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Laboratory fetched successfully',
    data: result,
  });
});

const updateLaboratory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await LaboratoryService.updateLaboratory(Number(id), payload);

  sendResponse<Laboratory>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Laboratory updated successfully',
    data: result,
  });
});

const deleteLaboratory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await LaboratoryService.deleteLaboratory(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Laboratory deleted successfully',
    data: result,
  });
});

export const LaboratoryController = {
  createLaboratory,
  getAllFromDB,
  getById,
  updateLaboratory,
  deleteLaboratory,
};
