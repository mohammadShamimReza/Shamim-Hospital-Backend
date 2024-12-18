'use strict';

const SSLCommerzPayment = require('sslcommerz-lts');

// Environment variables for dynamic configuration
const store_id = process.env.SSLCZ_STORE_ID || 'detox66a61e060bcb8';
const store_passwd = process.env.SSLCZ_STORE_PASSWD || 'detox66a61e060bcb8@ssl';
const is_live = process.env.SSLCZ_IS_LIVE === 'true'; // Set to true for live mode, false for sandbox

// Define interfaces for the inputs
export interface TransactionData {
  total_amount: number;
  currency: string;
  tran_id: string;
  success_url: string;
  fail_url: string;
  cancel_url: string;
  ipn_url: string;
  shipping_method: string;
  product_name: string;
  product_category: string;
  product_profile: string;
  cus_name: string;
  cus_email: string;
  cus_add1: string;
  cus_add2?: string;
  cus_city?: string;
  cus_state?: string;
  cus_postcode?: string;
  cus_country: string;
  cus_phone: string;
  cus_fax?: string;
  ship_name?: string;
  ship_add1?: string;
  ship_add2?: string;
  ship_city?: string;
  ship_state?: string;
  ship_postcode?: string;
  ship_country?: string;
}

export interface RefundData {
  refund_amount: number;
  bank_tran_id: string;
  refe_id: string;
}

export const paymentService = {
  async initTransaction(data: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const apiResponse = await sslcz.init(data);
      return apiResponse;
    } catch (error) {
      console.error('Error initiating transaction:', error);
      throw error;
    }
  },

  async sccess(data: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const apiResponse = await sslcz.init(data);
      return apiResponse;
    } catch (error) {
      console.error('Error initiating transaction:', error);
      throw error;
    }
  },

  async validateTransaction(val_id: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const response = await sslcz.validate({ val_id });
      return response;
    } catch (error) {
      console.error('Error validating transaction:', error);
      throw error;
    }
  },

  async initiateRefund(data: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const response = await sslcz.initiateRefund(data);
      return response;
    } catch (error) {
      console.error('Error initiating refund:', error);
      throw error;
    }
  },

  async refundQuery(refund_ref_id: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const response = await sslcz.refundQuery({ refund_ref_id });
      return response;
    } catch (error) {
      console.error('Error querying refund status:', error);
      throw error;
    }
  },

  async transactionQueryByTransactionId(tran_id: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const response = await sslcz.transactionQueryByTransactionId({ tran_id });
      return response;
    } catch (error) {
      console.error('Error querying transaction status:', error);
      throw error;
    }
  },

  async transactionQueryBySessionId(sessionkey: any) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    try {
      const response = await sslcz.transactionQueryBySessionId({ sessionkey });
      return response;
    } catch (error) {
      console.error('Error querying transaction by session ID:', error);
      throw error;
    }
  },
};
