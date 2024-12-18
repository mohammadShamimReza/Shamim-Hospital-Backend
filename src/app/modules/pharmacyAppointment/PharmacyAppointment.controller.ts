import { PharmacyOnAppointment } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PharmacyAppointmentService } from './PharmacyAppointment.service';

const createPharmacyAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;

    const result =
      await PharmacyAppointmentService.createPharmacyAppointment(payload);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'PharmacyAppointment created successfully',
      data: result,
    });
  },
);

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await PharmacyAppointmentService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'PharmacyAppointment fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PharmacyAppointmentService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'PharmacyAppointment fetched successfully',
    data: result,
  });
});

const updatePharmacyAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await PharmacyAppointmentService.updatePharmacyAppointment(
      Number(id),
      payload,
    );

    sendResponse<PharmacyOnAppointment>(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'PharmacyAppointment update successfully',
      data: result,
    });
  },
);
const deletePharmacyAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PharmacyAppointmentService.deletePharmacyAppointment(
      Number(id),
    );

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'PharmacyAppointment delete successfully',
      data: result,
    });
  },
);

export const PharmacyAppointmentController = {
  createPharmacyAppointment,
  getAllFromDB,
  getById,
  updatePharmacyAppointment,
  deletePharmacyAppointment,
};
