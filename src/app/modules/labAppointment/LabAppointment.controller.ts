import { LabAppointment } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LabAppointmentService } from './LabAppointment.service';

const createLabAppointment = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await LabAppointmentService.createLabAppointment(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'LabAppointment created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await LabAppointmentService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'LabAppointment fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LabAppointmentService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'LabAppointment fetched successfully',
    data: result,
  });
});

const updateLabAppointment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await LabAppointmentService.updateLabAppointment(
    Number(id),
    payload,
  );

  sendResponse<LabAppointment>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'LabAppointment update successfully',
    data: result,
  });
});
const deleteLabAppointment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await LabAppointmentService.deleteLabAppointment(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'LabAppointment delete successfully',
    data: result,
  });
});

export const LabAppointmentController = {
  createLabAppointment,
  getAllFromDB,
  getById,
  updateLabAppointment,
  deleteLabAppointment,
};
