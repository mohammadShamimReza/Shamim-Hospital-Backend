"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Diagonistic_controller_1 = require("./Diagonistic.controller");
const Diagonistic_validation_1 = require("./Diagonistic.validation");
const router = express_1.default.Router();
router.get('/:id', Diagonistic_controller_1.DiagnosticController.getById);
router.get('/', Diagonistic_controller_1.DiagnosticController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Diagonistic_validation_1.DiagnosticValidation.createDiagnostic), Diagonistic_controller_1.DiagnosticController.createDiagnostic);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Diagonistic_validation_1.DiagnosticValidation.updateDiagnostic), Diagonistic_controller_1.DiagnosticController.updateDiagnostic);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Diagonistic_controller_1.DiagnosticController.deleteDiagnostic);
exports.DiagnosticRoutes = router;
