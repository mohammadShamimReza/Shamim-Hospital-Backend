"use strict";
/* eslint-disable no-unused-vars */
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
exports.AuthService = void 0;
const index_js_1 = __importDefault(require("../../../config/index.js"));
const ApiError_js_1 = __importDefault(require("../../../errors/ApiError.js"));
const jwtHelpers_js_1 = require("../../../helpers/jwtHelpers.js");
const prisma_js_1 = __importDefault(require("../../../shared/prisma.js"));
const sendResetMail_js_1 = require("./sendResetMail.js");
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRole = data.role;
    let result;
    if (userRole === 'admin') {
        result = yield prisma_js_1.default.admin.create({ data });
    }
    else if (userRole === 'patient') {
        result = yield prisma_js_1.default.user.create({ data });
    }
    else if (userRole === 'doctor') {
        result = yield prisma_js_1.default.doctor.create({ data });
    }
    else if (userRole === 'nurse') {
        result = yield prisma_js_1.default.nurse.create({ data });
    }
    else if (userRole === 'staff') {
        result = yield prisma_js_1.default.staff.create({ data });
    }
    else {
        throw new Error('Invalid user role');
    }
    const { email, role, id, password } = result;
    const accessToken = jwtHelpers_js_1.jwtHelpers.createToken({ email, role, id }, index_js_1.default.jwt.secret, index_js_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_js_1.jwtHelpers.createToken({ email, password, id }, index_js_1.default.jwt.refresh_secret, index_js_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logIn = (LoginData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(LoginData);
    const { email, password, role: userRole } = LoginData;
    let isUserExist;
    if (userRole === 'admin') {
        console.log('here');
        isUserExist = yield prisma_js_1.default.admin.findFirst({
            where: {
                email,
            },
        });
    }
    if (userRole === 'patient') {
        isUserExist = yield prisma_js_1.default.user.findFirst({
            where: {
                email,
            },
        });
    }
    if (userRole === 'doctor') {
        isUserExist = yield prisma_js_1.default.doctor.findFirst({
            where: {
                email,
            },
        });
    }
    if (userRole === 'nurse') {
        isUserExist = yield prisma_js_1.default.nurse.findFirst({
            where: {
                email,
            },
        });
    }
    if (userRole === 'staff') {
        isUserExist = yield prisma_js_1.default.staff.findFirst({
            where: {
                email,
            },
        });
    }
    if (!isUserExist) {
        throw new ApiError_js_1.default(500, 'user not found');
    }
    const { role, id } = isUserExist;
    let isUserExistWithPassword;
    if (userRole === 'admin') {
        isUserExistWithPassword = yield prisma_js_1.default.admin.findFirst({
            where: {
                email,
                password,
            },
        });
    }
    if (userRole === 'patient') {
        isUserExistWithPassword = yield prisma_js_1.default.user.findFirst({
            where: {
                email,
                password,
            },
        });
    }
    if (userRole === 'doctor') {
        isUserExistWithPassword = yield prisma_js_1.default.doctor.findFirst({
            where: {
                email,
                password,
            },
        });
    }
    if (userRole === 'nurse') {
        isUserExistWithPassword = yield prisma_js_1.default.nurse.findFirst({
            where: {
                email,
                password,
            },
        });
    }
    if (userRole === 'staff') {
        isUserExistWithPassword = yield prisma_js_1.default.staff.findFirst({
            where: {
                email,
                password,
            },
        });
    }
    if (!isUserExistWithPassword) {
        throw new ApiError_js_1.default(500, 'password not matched');
    }
    const accessToken = jwtHelpers_js_1.jwtHelpers.createToken({ email, role, id }, index_js_1.default.jwt.secret, index_js_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_js_1.jwtHelpers.createToken({ email, password, id }, index_js_1.default.jwt.refresh_secret, index_js_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const changePassword = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    const isUserExist = yield prisma_js_1.default.user.findUnique({
        where: {
            id: user === null || user === void 0 ? void 0 : user.id,
        },
    });
    if (!isUserExist) {
        throw new ApiError_js_1.default(500, 'User does not exist');
    }
    // // checking old password
    if (isUserExist.password !== oldPassword) {
        throw new ApiError_js_1.default(500, 'Old Password is incorrect');
    }
    const result = yield prisma_js_1.default.user.update({
        where: {
            id: user === null || user === void 0 ? void 0 : user.id,
        },
        data: {
            password: newPassword,
        },
    });
    return result;
});
const forgotPass = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, role }) {
    console.log(email, role);
    let isUserExist;
    if (role === 'admin') {
        console.log('here');
        isUserExist = yield prisma_js_1.default.admin.findFirst({
            where: {
                email,
            },
        });
    }
    if (role === 'patient') {
        isUserExist = yield prisma_js_1.default.user.findFirst({
            where: {
                email,
            },
        });
    }
    if (role === 'doctor') {
        isUserExist = yield prisma_js_1.default.doctor.findFirst({
            where: {
                email,
            },
        });
    }
    if (role === 'nurse') {
        isUserExist = yield prisma_js_1.default.nurse.findFirst({
            where: {
                email,
            },
        });
    }
    if (role === 'staff') {
        isUserExist = yield prisma_js_1.default.staff.findFirst({
            where: {
                email,
            },
        });
    }
    console.log(isUserExist, 'this is user');
    if (!isUserExist) {
        throw new ApiError_js_1.default(500, 'User does not exist!');
    }
    const passResetToken = yield jwtHelpers_js_1.jwtHelpers.createResetToken({ id: isUserExist.id, role: isUserExist.role }, index_js_1.default.jwt.secret, '50m');
    const resetLink = index_js_1.default.resetlink + `?token=${passResetToken}`;
    console.log(resetLink);
    yield (0, sendResetMail_js_1.sendEmail)(isUserExist.email, `
      <div>
        <p>Hi, ${isUserExist.name}</p>
        <p>Your password reset link: <a href=${resetLink}>Click Here</a></p>
        <p>Thank you</p>
      </div>
  `);
    return {
        message: 'Check your email!',
    };
});
const me = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, role, id } = userData;
    let isUserExistWithPassword;
    if (role === 'admin') {
        isUserExistWithPassword = yield prisma_js_1.default.admin.findFirst({
            where: {
                email,
                role,
                id,
            },
        });
    }
    if (role === 'patient') {
        isUserExistWithPassword = yield prisma_js_1.default.user.findFirst({
            where: {
                email,
                role,
                id,
            },
        });
    }
    if (role === 'doctor') {
        isUserExistWithPassword = yield prisma_js_1.default.doctor.findFirst({
            where: {
                email,
                role,
                id,
            },
        });
    }
    if (role === 'nurse') {
        isUserExistWithPassword = yield prisma_js_1.default.nurse.findFirst({
            where: {
                email,
                role,
                id,
            },
        });
    }
    if (role === 'staff') {
        isUserExistWithPassword = yield prisma_js_1.default.staff.findFirst({
            where: {
                email,
                role,
                id,
            },
        });
    }
    if (!isUserExistWithPassword) {
        throw new ApiError_js_1.default(500, 'You are not authorized to access this resource!');
    }
    return isUserExistWithPassword;
});
const resetPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, newPassword, token, role } = payload;
    let user;
    if (role === 'admin') {
        user = yield prisma_js_1.default.admin.findUnique({
            where: {
                role,
                id,
            },
        });
    }
    if (role === 'patient') {
        user = yield prisma_js_1.default.user.findUnique({
            where: {
                role,
                id,
            },
        });
    }
    if (role === 'doctor') {
        user = yield prisma_js_1.default.doctor.findUnique({
            where: {
                role,
                id,
            },
        });
    }
    if (role === 'nurse') {
        user = yield prisma_js_1.default.nurse.findUnique({
            where: {
                role,
                id,
            },
        });
    }
    if (role === 'staff') {
        user = yield prisma_js_1.default.staff.findUnique({
            where: {
                role,
                id,
            },
        });
    }
    if (!user) {
        throw new ApiError_js_1.default(500, 'User not found!');
    }
    const isVarified = yield jwtHelpers_js_1.jwtHelpers.verifyToken(token, index_js_1.default.jwt.secret);
    if (id !== isVarified.id || role !== isVarified.role) {
        throw new ApiError_js_1.default(401, 'Token is invalid or expired!');
    }
    // const password = await bcrypt.hash(newPassword, Number(config.bycrypt_salt_rounds));
    let result;
    if ((user === null || user === void 0 ? void 0 : user.role) === 'admin') {
        result = yield prisma_js_1.default.admin.update({
            where: {
                id: user === null || user === void 0 ? void 0 : user.id,
            },
            data: {
                password: newPassword,
            },
        });
    }
    if ((user === null || user === void 0 ? void 0 : user.role) === 'patient') {
        result = yield prisma_js_1.default.user.update({
            where: {
                id: user === null || user === void 0 ? void 0 : user.id,
            },
            data: {
                password: newPassword,
            },
        });
    }
    if ((user === null || user === void 0 ? void 0 : user.role) === 'doctor') {
        result = yield prisma_js_1.default.doctor.update({
            where: {
                id: user === null || user === void 0 ? void 0 : user.id,
            },
            data: {
                password: newPassword,
            },
        });
    }
    if ((user === null || user === void 0 ? void 0 : user.role) === 'nurse') {
        result = yield prisma_js_1.default.nurse.update({
            where: {
                id: user === null || user === void 0 ? void 0 : user.id,
            },
            data: {
                password: newPassword,
            },
        });
    }
    if ((user === null || user === void 0 ? void 0 : user.role) === 'staff') {
        result = yield prisma_js_1.default.staff.update({
            where: {
                id: user === null || user === void 0 ? void 0 : user.id,
            },
            data: {
                password: newPassword,
            },
        });
    }
    console.log(result, 'this is result');
    return result;
});
exports.AuthService = {
    me,
    signUp,
    logIn,
    changePassword,
    forgotPass,
    resetPassword,
};
