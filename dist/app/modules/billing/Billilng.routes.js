"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Billing_controller_1 = require("./Billing.controller");
const Billing_validation_1 = require("./Billing.validation");
const router = express_1.default.Router();
router.get('/:id', Billing_controller_1.BillingController.getById);
router.get('/', Billing_controller_1.BillingController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Billing_validation_1.BillingValidation.createBilling), Billing_controller_1.BillingController.createBilling);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Billing_validation_1.BillingValidation.updateBilling), Billing_controller_1.BillingController.updateBilling);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Billing_controller_1.BillingController.deleteBilling);
exports.BillingRoutes = router;
