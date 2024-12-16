import { Diagnostic } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DiagnosticService } from './Diagonistic.service';

const createDiagnostic = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await DiagnosticService.createDiagnostic(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Diagnostic created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await DiagnosticService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Diagnostics fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DiagnosticService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Diagnostic fetched successfully',
    data: result,
  });
});

const updateDiagnostic = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await DiagnosticService.updateDiagnostic(Number(id), payload);

  sendResponse<Diagnostic>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Diagnostic updated successfully',
    data: result,
  });
});

const deleteDiagnostic = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await DiagnosticService.deleteDiagnostic(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Diagnostic deleted successfully',
    data: result,
  });
});

export const DiagnosticController = {
  createDiagnostic,
  getAllFromDB,
  getById,
  updateDiagnostic,
  deleteDiagnostic,
};
