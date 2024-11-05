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
exports.StaffService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createStaff = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.staff.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.staff.findMany({});
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.staff.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateStaff = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.staff.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteStaff = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.staff.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.StaffService = {
    createStaff,
    getAllFromDb,
    getById,
    updateStaff,
    deleteStaff,
};
