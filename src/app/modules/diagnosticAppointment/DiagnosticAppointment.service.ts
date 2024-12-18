import { DiagnosticAppointment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createDiagnosticAppointment = async (
  payload: DiagnosticAppointment,
): Promise<DiagnosticAppointment> => {
  const result = await prisma.diagnosticAppointment.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<DiagnosticAppointment[]> => {
  const result = await prisma.diagnosticAppointment.findMany({
    include: {
      appointment: true,
      diagnostic: true,
    },
  });
  return result;
};
const getById = async (id: number): Promise<DiagnosticAppointment | null> => {
  const result = await prisma.diagnosticAppointment.findUnique({
    where: {
      id,
    },
  });
  console.log(result, 'this is form diagnosticAppointment');
  return result;
};

const updateDiagnosticAppointment = async (
  id: number,
  payload: Partial<DiagnosticAppointment>,
): Promise<DiagnosticAppointment> => {
  const result = await prisma.diagnosticAppointment.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteDiagnosticAppointment = async (
  id: number,
): Promise<DiagnosticAppointment> => {
  const result = await prisma.diagnosticAppointment.delete({
    where: {
      id,
    },
  });
  return result;
};

export const DiagnosticAppointmentService = {
  createDiagnosticAppointment,
  getAllFromDb,
  getById,
  updateDiagnosticAppointment,
  deleteDiagnosticAppointment,
};
