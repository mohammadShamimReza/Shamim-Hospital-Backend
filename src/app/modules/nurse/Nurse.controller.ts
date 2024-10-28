import { Nurse } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { NurseService } from './Nurse.service';
import { StatusCodes } from 'http-status-codes';

const createNurse = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await NurseService.createNurse(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Nurse created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await NurseService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Nurses fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NurseService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Nurse fetched successfully',
    data: result,
  });
});

const updateNurse = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await NurseService.updateNurse(Number(id), payload);

  sendResponse<Nurse>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Nurse updated successfully',
    data: result,
  });
});

const deleteNurse = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await NurseService.deleteNurse(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Nurse deleted successfully',
    data: result,
  });
});

export const NurseController = {
  createNurse,
  getAllFromDB,
  getById,
  updateNurse,
  deleteNurse,
};
