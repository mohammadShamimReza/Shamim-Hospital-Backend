import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { MedicationService } from './Medication.service';
import { StatusCodes } from 'http-status-codes';
const createMedication = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await MedicationService.createMedication(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Medication created successfully',
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const result = await MedicationService.getAllFromDb();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Medications fetched successfully',
        data: result,
    });
});
const getById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await MedicationService.getById(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Medication fetched successfully',
        data: result,
    });
});
const updateMedication = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await MedicationService.updateMedication(Number(id), payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Medication updated successfully',
        data: result,
    });
});
const deleteMedication = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await MedicationService.deleteMedication(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Medication deleted successfully',
        data: result,
    });
});
export const MedicationController = {
    createMedication,
    getAllFromDB,
    getById,
    updateMedication,
    deleteMedication,
};
