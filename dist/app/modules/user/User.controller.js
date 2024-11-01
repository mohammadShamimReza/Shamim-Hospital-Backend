import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { userService } from './User.service';
const getAllFromDB = catchAsync(async (req, res) => {
    const result = await userService.getAllFromDb();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'users fetched successfully',
        data: result,
    });
});
const getById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await userService.getById(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'User fetched successfully',
        data: result,
    });
});
const updateUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await userService.updateUser(Number(id), payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Staff updated successfully',
        data: result,
    });
});
const deleteUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await userService.deleteUsesr(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Staff deleted successfully',
        data: result,
    });
});
export const StaffController = {
    getAllFromDB,
    getById,
    updateUser,
    deleteUser,
};
