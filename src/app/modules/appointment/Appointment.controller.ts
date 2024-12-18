import { Appointment } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AppointmentService } from './Appointment.service';

const createAppointment = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await AppointmentService.createAppointment(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Appointment created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AppointmentService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Appointment fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AppointmentService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Appointment fetched successfully',
    data: result,
  });
});


const getAllAppointmentByUserId = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AppointmentService.getAllAppointmentByUserId(
      Number(id),
    );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Appointment fetched successfully',
      data: result,
    });
  },
);

const updateAppointment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await AppointmentService.updateAppointment(
    Number(id),
    payload,
  );

  sendResponse<Appointment>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Appointment update successfully',
    data: result,
  });
});
const deleteAppointment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AppointmentService.deleteAppointment(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Appointment delete successfully',
    data: result,
  });
});

export const AppointmentController = {
  createAppointment,
  getAllFromDB,
  getById,
  updateAppointment,
  deleteAppointment,
  getAllAppointmentByUserId,
};
