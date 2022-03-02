import {
  CREATE_PAYMENT_STAT_REQUEST,
  CREATE_PAYMENT_STAT_SUCCESS,
  CREATE_PAYMENT_STAT_FAIL,
  PAYMENT_INFO_FAIL,
  PAYMENT_INFO_REQUEST,
  PAYMENT_INFO_SUCCESS,
  CONFIRM_PAYMENT_FAIL,
  CONFIRM_PAYMENT_REQUEST,
  CONFIRM_PAYMENT_SUCCESS,
} from '../constants/paymentConstants.js';

import axios from 'axios';

//axios header setting issues fixed .
const userData = JSON.parse(localStorage.getItem('user'));
axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

/**
 * BACKEND
 * @ROUTE - post - /api/payment/createpayment
 * @REQUEST - body - {batchId,teacherId,paymentOf}
 * @TODO this should be an automatic process .this should be a scheduled job . where i will exicute the job every day
 * BUT for now i will keep a button on frontend so that teacher can create their own payment checker for last month.
 */
export const createPaymentAction =
  ({ batchId, paymentOf = undefined }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_PAYMENT_STAT_REQUEST });

      const { data } = await axios.post('/api/payment/createpayment', {
        batchId,
        paymentOf,
      });
      dispatch({
        type: CREATE_PAYMENT_STAT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_PAYMENT_STAT_FAIL,
        error: err,
      });
    }
  };
/**
 * @ROUTE - get - /api/payment/:batchId/:date?
 */
export const paymentInfoAction =
  ({ batchId, date = undefined }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PAYMENT_INFO_REQUEST,
      });

      const { data } = await axios.get(
        `api/payment/${batchId}${date ? '/' + date : ''}`
      );
      dispatch({
        type: PAYMENT_INFO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PAYMENT_INFO_FAIL,
        error,
      });
    }
  };

/**
 * BACKEND
 * @ROUTE - patch - /api/payment/confirmpayment
 * @REQUEST - body - {batchId,studentId,paymentOf,paidAt}
 */

export const confirmPaymentAction =
  ({ batchId, paymentOf, studentId, paidAt = undefined }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CONFIRM_PAYMENT_REQUEST,
      });

      const { data } = await axios.patch(`api/payment/confirmpayment`, {
        batchId,
        paymentOf,
        studentId,
        paidAt,
      });
      dispatch({
        type: CONFIRM_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_PAYMENT_FAIL,
        error,
      });
    }
  };
