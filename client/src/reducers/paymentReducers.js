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

export const paymentInfoReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_STAT_REQUEST:
    case PAYMENT_INFO_REQUEST:
      return { loading: true };
    case CREATE_PAYMENT_STAT_SUCCESS:
    case PAYMENT_INFO_SUCCESS:
      return {
        loading: false,
        payments: action.payload,
      };
    case CREATE_PAYMENT_STAT_FAIL:
    case PAYMENT_INFO_FAIL:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const confirmPaymentReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case CONFIRM_PAYMENT_REQUEST: 
      return { loading: true };
    case CONFIRM_PAYMENT_SUCCESS: 
      return {
        loading: false,
        payment: action.payload,
      };
    case CONFIRM_PAYMENT_FAIL: 
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};


