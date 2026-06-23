import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LaboratoryService } from './Laboratory.service';
const createLaboratory = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await LaboratoryService.createLaboratory(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Laboratory created successfully',
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const result = await LaboratoryService.getAllFromDb();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Laboratorys fetched successfully',
        data: result,
    });
});
const getById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await LaboratoryService.getById(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Laboratory fetched successfully',
        data: result,
    });
});
const updateLaboratory = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await LaboratoryService.updateLaboratory(Number(id), payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Laboratory updated successfully',
        data: result,
    });
});
const deleteLaboratory = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await LaboratoryService.deleteLaboratory(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Laboratory deleted successfully',
        data: result,
    });
});
export const LaboratoryController = {
    createLaboratory,
    getAllFromDB,
    getById,
    updateLaboratory,
    deleteLaboratory,
};
