import { Staff } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StaffService } from './Staff.service';
import { StatusCodes } from 'http-status-codes';

const createStaff = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await StaffService.createStaff(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Staff created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StaffService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Staff fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StaffService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Staff fetched successfully',
    data: result,
  });
});

const updateStaff = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await StaffService.updateStaff(Number(id), payload);

  sendResponse<Staff>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Staff updated successfully',
    data: result,
  });
});

const deleteStaff = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StaffService.deleteStaff(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Staff deleted successfully',
    data: result,
  });
});

export const StaffController = {
  createStaff,
  getAllFromDB,
  getById,
  updateStaff,
  deleteStaff,
};
