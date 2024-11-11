import { Room } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createRoom = async (payload: Room): Promise<Room> => {
  const result = await prisma.room.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Room[]> => {
  const result = await prisma.room.findMany({
    include: {
      nurses: true,
      staff: true
    }
  });
  return result;
};

const getById = async (id: number): Promise<Room | null> => {
  const result = await prisma.room.findUnique({
    where: { id },
   
  });
  return result;
};

const updateRoom = async (
  id: number,
  payload: Partial<Room> & {
    addNurses?: number[]; // IDs of nurses to add to the room
    removeNurses?: number[]; // IDs of nurses to remove from the room
    addStaff?: number[]; // IDs of staff to add to the room
    removeStaff?: number[]; // IDs of staff to remove from the room
  },
): Promise<Room> => {
    const { addNurses, removeNurses, addStaff, removeStaff, ...roomData } =
      payload;

  const result = await prisma.room.update({
    where: { id },
    data: {
      ...roomData,
      nurses: {
        connect: addNurses?.map(nurseId => ({ id: nurseId })) || [],
        disconnect: removeNurses?.map(nurseId => ({ id: nurseId })) || [],
      },
      staff: {
        connect: addStaff?.map(staffId => ({ id: staffId })) || [],
        disconnect: removeStaff?.map(staffId => ({ id: staffId })) || [],
      },
    },
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
