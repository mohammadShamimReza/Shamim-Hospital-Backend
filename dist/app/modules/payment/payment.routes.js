"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const router = express_1.default.Router();
router.post('/init', payment_controller_1.paymentController.init);
router.get('/success/:userId', payment_controller_1.paymentController.success);
router.get('/validate', payment_controller_1.paymentController.validate);
router.post('/refund', payment_controller_1.paymentController.initiateRefund);
router.get('/refundQuery', payment_controller_1.paymentController.refundQuery);
router.get('/transactionQueryById', payment_controller_1.paymentController.transactionQueryByTransactionId);
router.get('/transactionQueryBySession', payment_controller_1.paymentController.transactionQueryBySessionId);
exports.PaymentRoutes = router;
