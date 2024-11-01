import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AdminService } from './Admin.service';
import { StatusCodes } from 'http-status-codes';
const createAdmin = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await AdminService.createAdmin(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const result = await AdminService.getAllFromDb();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Admins fetched successfully',
        data: result,
    });
});
const getById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AdminService.getById(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Admin fetched successfully',
        data: result,
    });
});
const updateAdmin = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await AdminService.updateAdmin(Number(id), payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Admin updated successfully',
        data: result,
    });
});
const deleteAdmin = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await AdminService.deleteAdmin(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Admin deleted successfully',
        data: result,
    });
});
export const AdminController = {
    createAdmin,
    getAllFromDB,
    getById,
    updateAdmin,
    deleteAdmin,
};
