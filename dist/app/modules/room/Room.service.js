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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createRoom = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.room.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.room.findMany({
        include: {
            nurses: true,
            staff: true
        }
    });
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.room.findUnique({
        where: { id },
    });
    return result;
});
const updateRoom = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { addNurses, removeNurses, addStaff, removeStaff } = payload, roomData = __rest(payload, ["addNurses", "removeNurses", "addStaff", "removeStaff"]);
    const result = yield prisma_1.default.room.update({
        where: { id },
        data: Object.assign(Object.assign({}, roomData), { nurses: {
                connect: (addNurses === null || addNurses === void 0 ? void 0 : addNurses.map(nurseId => ({ id: nurseId }))) || [],
                disconnect: (removeNurses === null || removeNurses === void 0 ? void 0 : removeNurses.map(nurseId => ({ id: nurseId }))) || [],
            }, staff: {
                connect: (addStaff === null || addStaff === void 0 ? void 0 : addStaff.map(staffId => ({ id: staffId }))) || [],
                disconnect: (removeStaff === null || removeStaff === void 0 ? void 0 : removeStaff.map(staffId => ({ id: staffId }))) || [],
            } }),
    });
    return result;
});
const deleteRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.room.delete({
        where: { id },
    });
    return result;
});
exports.RoomService = {
    createRoom,
    getAllFromDb,
    getById,
    updateRoom,
    deleteRoom,
};
