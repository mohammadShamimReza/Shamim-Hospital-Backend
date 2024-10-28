 import { Medication } from '@prisma/client';
 import prisma from '../../../shared/prisma';

 const createMedication = async (payload: Medication): Promise<Medication> => {
   const result = await prisma.medication.create({ data: payload });
   return result;
 };

 const getAllFromDb = async (): Promise<Medication[]> => {
   const result = await prisma.medication.findMany({
     include: {
       prescription: true, // include related prescription if needed
     },
   });
   return result;
 };

 const getById = async (id: number): Promise<Medication | null> => {
   const result = await prisma.medication.findUnique({
     where: { id },
     include: {
       prescription: true, // include related prescription if needed
     },
   });
   return result;
 };

 const updateMedication = async (
   id: number,
   payload: Partial<Medication>,
 ): Promise<Medication> => {
   const result = await prisma.medication.update({
     where: { id },
     data: payload,
   });
   return result;
 };

 const deleteMedication = async (id: number): Promise<Medication> => {
   const result = await prisma.medication.delete({
     where: { id },
   });
   return result;
 };

 export const MedicationService = {
   createMedication,
   getAllFromDb,
   getById,
   updateMedication,
   deleteMedication,
 };
