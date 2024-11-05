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
exports.NoticeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createNotice = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notice.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notice.findMany();
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notice.findUnique({
        where: { id },
    });
    return result;
});
const updateNotice = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notice.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteNotice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.notice.delete({
        where: { id },
    });
    return result;
});
exports.NoticeService = {
    createNotice,
    getAllFromDb,
    getById,
    updateNotice,
    deleteNotice,
};
