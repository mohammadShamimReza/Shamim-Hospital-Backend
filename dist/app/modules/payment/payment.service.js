'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const SSLCommerzPayment = require('sslcommerz-lts');
// Environment variables for dynamic configuration
const store_id = process.env.SSLCZ_STORE_ID || 'detox66a61e060bcb8';
const store_passwd = process.env.SSLCZ_STORE_PASSWD || 'detox66a61e060bcb8@ssl';
const is_live = process.env.SSLCZ_IS_LIVE === 'true'; // Set to true for live mode, false for sandbox
exports.paymentService = {
    initTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const apiResponse = yield sslcz.init(data);
                return apiResponse;
            }
            catch (error) {
                console.error('Error initiating transaction:', error);
                throw error;
            }
        });
    },
    sccess(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const apiResponse = yield sslcz.init(data);
                return apiResponse;
            }
            catch (error) {
                console.error('Error initiating transaction:', error);
                throw error;
            }
        });
    },
    validateTransaction(val_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const response = yield sslcz.validate({ val_id });
                return response;
            }
            catch (error) {
                console.error('Error validating transaction:', error);
                throw error;
            }
        });
    },
    initiateRefund(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const response = yield sslcz.initiateRefund(data);
                return response;
            }
            catch (error) {
                console.error('Error initiating refund:', error);
                throw error;
            }
        });
    },
    refundQuery(refund_ref_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const response = yield sslcz.refundQuery({ refund_ref_id });
                return response;
            }
            catch (error) {
                console.error('Error querying refund status:', error);
                throw error;
            }
        });
    },
    transactionQueryByTransactionId(tran_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const response = yield sslcz.transactionQueryByTransactionId({ tran_id });
                return response;
            }
            catch (error) {
                console.error('Error querying transaction status:', error);
                throw error;
            }
        });
    },
    transactionQueryBySessionId(sessionkey) {
        return __awaiter(this, void 0, void 0, function* () {
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
            try {
                const response = yield sslcz.transactionQueryBySessionId({ sessionkey });
                return response;
            }
            catch (error) {
                console.error('Error querying transaction by session ID:', error);
                throw error;
            }
        });
    },
};
