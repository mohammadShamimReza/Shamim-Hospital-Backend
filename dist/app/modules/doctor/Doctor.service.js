import prisma from "../../../shared/prisma";
const createDoctor = async (payload) => {
    const result = await prisma.doctor.create({ data: payload });
    return result;
};
const getAllFromDb = async () => {
    const result = await prisma.doctor.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma.doctor.findUnique({
        where: {
            id,
        },
        include: {
            appointments: {
                select: {
                    id: true,
                    appointmentDate: true,
                    prescription: true,
                    patient: true,
                    Service: true,
                },
            },
        },
    });
    return result;
};
const updateDoctor = async (id, payload) => {
    const result = await prisma.doctor.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteDoctor = async (id) => {
    const result = await prisma.doctor.delete({
        where: {
            id,
        },
    });
    return result;
};
export const DoctorService = {
    createDoctor,
    getAllFromDb,
    getById,
    updateDoctor,
    deleteDoctor,
};
