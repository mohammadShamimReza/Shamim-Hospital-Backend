import { Billing } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BillingService } from './Billing.service';

const createBilling = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await BillingService.createBilling(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Billing created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BillingService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Billings fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BillingService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Billing fetched successfully',
    data: result,
  });
});

const updateBilling = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await BillingService.updateBilling(Number(id), payload);

  sendResponse<Billing>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Billing updated successfully',
    data: result,
  });
});

const deleteBilling = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BillingService.deleteBilling(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Billing deleted successfully',
    data: result,
  });
});

export const BillingController = {
  createBilling,
  getAllFromDB,
  getById,
  updateBilling,
  deleteBilling,
};
