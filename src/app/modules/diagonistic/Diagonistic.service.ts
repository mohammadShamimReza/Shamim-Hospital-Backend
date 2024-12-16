import { Diagnostic } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createDiagnostic = async (payload: Diagnostic): Promise<Diagnostic> => {
  const result = await prisma.diagnostic.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Diagnostic[]> => {
  const result = await prisma.diagnostic.findMany({});
  return result;
};

const getById = async (id: number): Promise<Diagnostic | null> => {
  const result = await prisma.diagnostic.findUnique({
    where: { id },
  });
  return result;
};

const updateDiagnostic = async (
  id: number,
  payload: Partial<Diagnostic> & {
    addNurses?: number[]; // IDs of nurses to add to the diagnostic
    removeNurses?: number[]; // IDs of nurses to remove from the diagnostic
    addStaff?: number[]; // IDs of staff to add to the diagnostic
    removeStaff?: number[]; // IDs of staff to remove from the diagnostic
  },
): Promise<Diagnostic> => {
  const { ...diagnosticData } = payload;

  const result = await prisma.diagnostic.update({
    where: { id },
    data: {
      ...diagnosticData,
    },
  });
  return result;
};

const deleteDiagnostic = async (id: number): Promise<Diagnostic> => {
  const result = await prisma.diagnostic.delete({
    where: { id },
  });
  return result;
};

export const DiagnosticService = {
  createDiagnostic,
  getAllFromDb,
  getById,
  updateDiagnostic,
  deleteDiagnostic,
};
