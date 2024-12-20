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
exports.AuthController = void 0;
const index_1 = __importDefault(require("../../../config/index"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const Auth_service_1 = require("./Auth.service");
const signUp = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Auth_service_1.AuthService.signUp(req.body);
    const { accessToken, refreshToken } = result;
    const cookieOption = {
        secure: index_1.default.env === 'production',
        httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOption);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'User logged in successfully',
        data: {
            accessToken: accessToken,
        },
    });
}));
const logIn = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const LoginData = req.body;
    const result = yield Auth_service_1.AuthService.logIn(LoginData);
    const { accessToken, refreshToken } = result;
    const cookieOption = {
        secure: index_1.default.env === 'production',
        httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOption);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'User logged in successfully',
        data: {
            accessToken: accessToken,
        },
    });
}));
const me = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(400, 'You are not authorized me');
    }
    const verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, index_1.default.jwt.secret);
    const result = yield Auth_service_1.AuthService.me(verifiedUser);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User founded successfully !',
        data: result,
    });
}));
const changePassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const passwordData = __rest(req.body, []);
    const result = yield Auth_service_1.AuthService.changePassword(user, passwordData);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Password changed successfully !',
        data: result,
    });
}));
const forgotPass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, 'this is forgotPass');
    yield Auth_service_1.AuthService.forgotPass(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Check your email!',
    });
}));
const resetPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Auth_service_1.AuthService.resetPassword(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Account recovered!',
    });
}));
exports.AuthController = {
    me,
    signUp,
    logIn,
    changePassword,
    forgotPass,
    resetPassword,
};
