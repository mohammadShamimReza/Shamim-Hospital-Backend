import { Notice } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createNotice = async (payload: Notice): Promise<Notice> => {
  const result = await prisma.notice.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Notice[]> => {
  const result = await prisma.notice.findMany();
  return result;
};

const getById = async (id: number): Promise<Notice | null> => {
  const result = await prisma.notice.findUnique({
    where: { id },
  });
  return result;
};

const updateNotice = async (
  id: number,
  payload: Partial<Notice>,
): Promise<Notice> => {
  const result = await prisma.notice.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteNotice = async (id: number): Promise<Notice> => {
  const result = await prisma.notice.delete({
    where: { id },
  });
  return result;
};

export const NoticeService = {
  createNotice,
  getAllFromDb,
  getById,
  updateNotice,
  deleteNotice,
};
