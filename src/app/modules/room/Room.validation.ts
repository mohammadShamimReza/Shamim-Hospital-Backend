import { z } from 'zod';

const createRoom = z.object({
  body: z.object({
    roomNumber: z.string({ required_error: 'Room number is required' }),
    departmentId: z.number().int().optional(),
  }),
});

const updateRoom = z.object({
  body: z.object({
    roomNumber: z.string().optional(),
    departmentId: z.number().int().optional(),
  }),
});

export const RoomValidation = {
  createRoom,
  updateRoom,
};
