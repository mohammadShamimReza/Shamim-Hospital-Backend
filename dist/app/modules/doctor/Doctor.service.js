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
exports.DoctorService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createDoctor = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.doctor.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.doctor.findMany({
        include: {
            Service: true,
        },
    });
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.doctor.findUnique({
        where: {
            id,
        },
        include: {
            Service: true,
            appointments: {
                select: {
                    id: true,
                    appointmentDate: true,
                    prescription: true,
                    patient: true,
                    Service: true,
                    status: true,
                    price: true,
                    LabAppointment: {
                        select: {
                            laboratory: {
                                select: {
                                    id: true,
                                    testName: true,
                                },
                            },
                        },
                    },
                    DiagnosticAppointment: {
                        select: {
                            diagnostic: {
                                select: {
                                    id: true,
                                    diagnosticName: true,
                                },
                            },
                        },
                    },
                    Pharmacy: {
                        select: {
                            pharmacy: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                    Billing: true,
                },
            },
        },
    });
    return result;
});
const updateDoctor = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.doctor.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.doctor.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.DoctorService = {
    createDoctor,
    getAllFromDb,
    getById,
    updateDoctor,
    deleteDoctor,
};
