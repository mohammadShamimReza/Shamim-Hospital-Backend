"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyAppointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const PharmacyAppointment_controller_1 = require("./PharmacyAppointment.controller");
const PharmacyAppointment_validation_1 = require("./PharmacyAppointment.validation");
const router = express_1.default.Router();
router.get('/:id', PharmacyAppointment_controller_1.PharmacyAppointmentController.getById);
router.get('/', PharmacyAppointment_controller_1.PharmacyAppointmentController.getAllFromDB);
router.post('/create', (0, auth_1.default)(user_1.ENUM_USER_ROLE.DOCTOR), (0, validateRequest_1.default)(PharmacyAppointment_validation_1.PharmacyOnAppointmentValidation.createPharmacyOnAppointment), PharmacyAppointment_controller_1.PharmacyAppointmentController.createPharmacyAppointment);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.DOCTOR, user_1.ENUM_USER_ROLE.Staff), (0, validateRequest_1.default)(PharmacyAppointment_validation_1.PharmacyOnAppointmentValidation.updatePharmacyOnAppointment), PharmacyAppointment_controller_1.PharmacyAppointmentController.updatePharmacyAppointment);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.DOCTOR, user_1.ENUM_USER_ROLE.Staff), PharmacyAppointment_controller_1.PharmacyAppointmentController.deletePharmacyAppointment);
exports.PharmacyAppointmentRoutes = router;
