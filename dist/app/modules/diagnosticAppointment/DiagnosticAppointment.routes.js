"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticAppointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const DiagnosticAppointment_controller_1 = require("./DiagnosticAppointment.controller");
const DiagnosticAppointment_validation_1 = require("./DiagnosticAppointment.validation");
const router = express_1.default.Router();
router.get('/:id', DiagnosticAppointment_controller_1.DiagnosticAppointmentController.getById);
router.get('/', DiagnosticAppointment_controller_1.DiagnosticAppointmentController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(DiagnosticAppointment_validation_1.DiagnosticAppointmentValidation.createDiagnosticAppointment), DiagnosticAppointment_controller_1.DiagnosticAppointmentController.createDiagnosticAppointment);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(DiagnosticAppointment_validation_1.DiagnosticAppointmentValidation.updateDiagnosticAppointment), DiagnosticAppointment_controller_1.DiagnosticAppointmentController.updateDiagnosticAppointment);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), DiagnosticAppointment_controller_1.DiagnosticAppointmentController.deleteDiagnosticAppointment);
exports.DiagnosticAppointmentRoutes = router;
