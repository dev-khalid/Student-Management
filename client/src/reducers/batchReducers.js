import {
  ALL_BATCH_FAIL,
  ALL_BATCH_REQUEST,
  ALL_BATCH_SUCCESS,
  BATCH_DETAILS_FAIL,
  BATCH_DETAILS_REQUEST,
  BATCH_DETAILS_SUCCESS,
  CREATE_BATCH_FAIL,
  CREATE_BATCH_REQUEST,
  CREATE_BATCH_SUCCESS,
} from '../constants/batchConstants';



export const createBatchReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_BATCH_REQUEST:
      return {
        loading: true,
      };
    case CREATE_BATCH_SUCCESS:
      return {
        loading: false,
        batch: action.payload,
      };
    case CREATE_BATCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const batchsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ALL_BATCH_REQUEST:
      return {
        loading: true,
      };
    case ALL_BATCH_SUCCESS:
      return {
        loading: false,
        batchs: action.payload,
      };
    case ALL_BATCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const batchDetailsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case BATCH_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case BATCH_DETAILS_SUCCESS:
      return {
        loading: false,
        batch: action.payload,
      };
    case BATCH_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
