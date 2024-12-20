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
exports.LabAppointmentService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createLabAppointment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.labAppointment.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.labAppointment.findMany({
        include: {
            appointment: true,
            laboratory: true,
        },
    });
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.labAppointment.findUnique({
        where: {
            id,
        },
    });
    console.log(result, 'this is form labAppointment');
    return result;
});
const updateLabAppointment = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.labAppointment.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteLabAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.labAppointment.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.LabAppointmentService = {
    createLabAppointment,
    getAllFromDb,
    getById,
    updateLabAppointment,
    deleteLabAppointment,
};
