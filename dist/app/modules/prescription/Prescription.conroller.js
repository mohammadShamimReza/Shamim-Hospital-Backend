import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PrescriptionService } from './Prescription.service';
import { StatusCodes } from 'http-status-codes';
const createPrescription = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await PrescriptionService.createPrescription(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Prescription created successfully',
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const result = await PrescriptionService.getAllFromDb();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Prescriptions fetched successfully',
        data: result,
    });
});
const getById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PrescriptionService.getById(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Prescription fetched successfully',
        data: result,
    });
});
const updatePrescription = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await PrescriptionService.updatePrescription(Number(id), payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Prescription updated successfully',
        data: result,
    });
});
const deletePrescription = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await PrescriptionService.deletePrescription(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Prescription deleted successfully',
        data: result,
    });
});
export const PrescriptionController = {
    createPrescription,
    getAllFromDB,
    getById,
    updatePrescription,
    deletePrescription,
};
