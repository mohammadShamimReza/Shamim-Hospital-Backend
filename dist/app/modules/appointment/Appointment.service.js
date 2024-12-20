"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createAppointment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.appointment.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.appointment.findMany({
        include: {
            patient: true,
            doctor: true,
            Service: true,
        },
    });
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.appointment.findUnique({
        where: {
            id,
        },
    });
    console.log(result, 'this is form appointment');
    return result;
});
const getAllAppointmentByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.appointment.findMany({
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
});
const updateAppointment = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.appointment.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.appointment.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.AppointmentService = {
    createAppointment,
    getAllFromDb,
    getById,
    updateAppointment,
    deleteAppointment,
    getAllAppointmentByUserId,
};
