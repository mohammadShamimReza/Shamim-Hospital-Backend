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
exports.AssetService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createAsset = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.asset.create({ data: payload });
    return result;
});
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.asset.findMany({});
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.asset.findUnique({
        where: { id },
    });
    return result;
});
const updateAsset = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const assetData = __rest(payload, []);
    const result = yield prisma_1.default.asset.update({
        where: { id },
        data: Object.assign({}, assetData),
    });
    return result;
});
const deleteAsset = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.asset.delete({
        where: { id },
    });
    return result;
});
exports.AssetService = {
    createAsset,
    getAllFromDb,
    getById,
    updateAsset,
    deleteAsset,
};
