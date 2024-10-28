import { Room } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createRoom = async (payload: Room): Promise<Room> => {
  const result = await prisma.room.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Room[]> => {
  const result = await prisma.room.findMany({
    include: {
      department: true, // include related department if needed
    },
  });
  return result;
};

const getById = async (id: number): Promise<Room | null> => {
  const result = await prisma.room.findUnique({
    where: { id },
    include: {
      department: true, // include related department if needed
    },
  });
  return result;
};

const updateRoom = async (
  id: number,
  payload: Partial<Room>,
): Promise<Room> => {
  const result = await prisma.room.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteRoom = async (id: number): Promise<Room> => {
  const result = await prisma.room.delete({
    where: { id },
  });
  return result;
};

export const RoomService = {
  createRoom,
  getAllFromDb,
  getById,
  updateRoom,
  deleteRoom,
};
