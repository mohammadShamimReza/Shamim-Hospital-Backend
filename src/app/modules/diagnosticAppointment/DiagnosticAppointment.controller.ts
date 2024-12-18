import { DiagnosticAppointment } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DiagnosticAppointmentService } from './DiagnosticAppointment.service';

const createDiagnosticAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;

    const result =
      await DiagnosticAppointmentService.createDiagnosticAppointment(payload);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'DiagnosticAppointment created successfully',
      data: result,
    });
  },
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await DiagnosticAppointmentService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'DiagnosticAppointment fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DiagnosticAppointmentService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'DiagnosticAppointment fetched successfully',
    data: result,
  });
});

const updateDiagnosticAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result =
      await DiagnosticAppointmentService.updateDiagnosticAppointment(
        Number(id),
        payload,
      );

    sendResponse<DiagnosticAppointment>(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'DiagnosticAppointment update successfully',
      data: result,
    });
  },
);
const deleteDiagnosticAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result =
      await DiagnosticAppointmentService.deleteDiagnosticAppointment(
        Number(id),
      );

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'DiagnosticAppointment delete successfully',
      data: result,
    });
  },
);

export const DiagnosticAppointmentController = {
  createDiagnosticAppointment,
  getAllFromDB,
  getById,
  updateDiagnosticAppointment,
  deleteDiagnosticAppointment,
};
