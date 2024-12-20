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
exports.DiagnosticAppointmentService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createDiagnosticAppointment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.diagnosticAppointment.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.diagnosticAppointment.findMany({
        include: {
            appointment: true,
            diagnostic: true,
        },
    });
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.diagnosticAppointment.findUnique({
        where: {
            id,
        },
    });
    console.log(result, 'this is form diagnosticAppointment');
    return result;
});
const updateDiagnosticAppointment = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.diagnosticAppointment.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteDiagnosticAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.diagnosticAppointment.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.DiagnosticAppointmentService = {
    createDiagnosticAppointment,
    getAllFromDb,
    getById,
    updateDiagnosticAppointment,
    deleteDiagnosticAppointment,
};
