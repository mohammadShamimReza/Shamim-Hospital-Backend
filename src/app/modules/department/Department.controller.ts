import { Department } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DepartmentService } from './Department.service';
import { StatusCodes } from 'http-status-codes';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await DepartmentService.createDepartment(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await DepartmentService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Departments fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DepartmentService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department fetched successfully',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await DepartmentService.updateDepartment(Number(id), payload);

  sendResponse<Department>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department updated successfully',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await DepartmentService.deleteDepartment(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department deleted successfully',
    data: result,
  });
});

export const DepartmentController = {
  createDepartment,
  getAllFromDB,
  getById,
  updateDepartment,
  deleteDepartment,
};
