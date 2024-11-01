import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RoomService } from './Room.service';
import { StatusCodes } from 'http-status-codes';
const createRoom = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await RoomService.createRoom(payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Room created successfully',
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const result = await RoomService.getAllFromDb();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Rooms fetched successfully',
        data: result,
    });
});
const getById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await RoomService.getById(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Room fetched successfully',
        data: result,
    });
});
const updateRoom = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await RoomService.updateRoom(Number(id), payload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Room updated successfully',
        data: result,
    });
});
const deleteRoom = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await RoomService.deleteRoom(Number(id));
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Room deleted successfully',
        data: result,
    });
});
export const RoomController = {
    createRoom,
    getAllFromDB,
    getById,
    updateRoom,
    deleteRoom,
};
