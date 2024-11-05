"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomValidation = void 0;
const zod_1 = require("zod");
const createRoom = zod_1.z.object({
    body: zod_1.z.object({
        roomNumber: zod_1.z.string({ required_error: 'Room number is required' }),
        needNurseAndStaff: zod_1.z.number().int().optional(),
    }),
});
const updateRoom = zod_1.z.object({
    body: zod_1.z.object({
        roomNumber: zod_1.z.string().optional(),
        needNurseAndStaff: zod_1.z.number().int().optional(),
    }),
});
exports.RoomValidation = {
    createRoom,
    updateRoom,
};
