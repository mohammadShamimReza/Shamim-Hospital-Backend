
import { Notice } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { NoticeService } from './Notice.service';
import { StatusCodes } from 'http-status-codes';

const createNotice = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await NoticeService.createNotice(payload);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notice created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await NoticeService.getAllFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notices fetched successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NoticeService.getById(Number(id));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notice fetched successfully',
    data: result,
  });
});

const updateNotice = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await NoticeService.updateNotice(Number(id), payload);

  sendResponse<Notice>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notice updated successfully',
    data: result,
  });
});

const deleteNotice = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await NoticeService.deleteNotice(Number(id));

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Notice deleted successfully',
    data: result,
  });
});

export const NoticeController = {
  createNotice,
  getAllFromDB,
  getById,
  updateNotice,
  deleteNotice,
};
