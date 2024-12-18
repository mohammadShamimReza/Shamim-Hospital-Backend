import { Appointment } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createAppointment = async (payload: Appointment): Promise<Appointment> => {
  const result = await prisma.appointment.create({ data: payload });
  return result;
};

const getAllFromDb = async (): Promise<Appointment[]> => {
  const result = await prisma.appointment.findMany({
    include: {
      patient: true,
      doctor: true,
      Service: true,
    },
  });
  return result;
};
const getById = async (id: number): Promise<Appointment | null> => {
  const result = await prisma.appointment.findUnique({
    where: {
      id,
    },
  });
  console.log(result, 'this is form appointment');
  return result;
};

const getAllAppointmentByUserId = async (userId: number) => {
  const result = await prisma.appointment.findMany({
    where: {
      patientId: userId,
    },
    select: {
      doctor: true,
      patient: true,
      id: true,
      Service: {
        select: {
          serviceName: true,
        },
      },
      appointmentDate: true,
      prescription: true,
      LabAppointment: {
        select: {
          laboratory: true,
        },
      },
      DiagnosticAppointment: {
        select: {
          diagnostic: true,
        },
      },
      Pharmacy: {
        select: {
          pharmacy: true,
        },
      },
      status: true,
    },
  });
  return result;
};

const updateAppointment = async (
  id: number,
  payload: Partial<Appointment>,
): Promise<Appointment> => {
  const result = await prisma.appointment.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteAppointment = async (id: number): Promise<Appointment> => {
  const result = await prisma.appointment.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AppointmentService = {
  createAppointment,
  getAllFromDb,
  getById,
  updateAppointment,
  deleteAppointment,
  getAllAppointmentByUserId,
};
