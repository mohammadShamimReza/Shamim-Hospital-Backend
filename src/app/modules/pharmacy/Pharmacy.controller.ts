import { Pharmacy } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PharmacyService } from './Pharmacy.service';

const createPharmacy = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await PharmacyService.createPharmacy(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Pharmacy created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await PharmacyService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Pharmacys fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PharmacyService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Pharmacy fetched successfully',
    data: result,
  });
});

const updatePharmacy = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await PharmacyService.updatePharmacy(Number(id), payload);

  sendResponse<Pharmacy>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Pharmacy updated successfully',
    data: result,
  });
});

const deletePharmacy = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PharmacyService.deletePharmacy(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Pharmacy deleted successfully',
    data: result,
  });
});

export const PharmacyController = {
  createPharmacy,
  getAllFromDB,
  getById,
  updatePharmacy,
  deletePharmacy,
};
