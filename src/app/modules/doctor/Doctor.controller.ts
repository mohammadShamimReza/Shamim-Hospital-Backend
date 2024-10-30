import { Doctor } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DoctorService } from './Doctor.service';

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await DoctorService.createDoctor(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Doctor created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Doctor fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DoctorService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Doctor fetched successfully',
    data: result,
  });
});

const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await DoctorService.updateDoctor(Number(id), payload);

  sendResponse<Doctor>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Doctor update successfully',
    data: result,
  });
});
const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await DoctorService.deleteDoctor(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Doctor delete successfully',
    data: result,
  });
});

export const DoctorController = {
  createDoctor,
  getAllFromDB,
  getById,
  updateDoctor,
  deleteDoctor,
};
