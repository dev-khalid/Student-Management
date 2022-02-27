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
import axios from 'axios';

export const createBatch =
  ({ name, fees, token }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_BATCH_REQUEST });
      const { data } = await axios.post(
        '/api/teacher/createbatch',
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        },
        {
          name,
          fees,
        }
      );
      dispatch({
        type: CREATE_BATCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_BATCH_FAIL,
        payload: err,
      });
    }
  };

export const allBatchs = (token) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_BATCH_REQUEST,
    });
    const headerConfig = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get('api/teacher/allbatch', headerConfig);
    dispatch({
      type: ALL_BATCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BATCH_FAIL,
      payload: error,
    });
  }
};

export const batch = (batchId, token) => async (dispatch) => {
  try {
    dispatch({
      type: BATCH_DETAILS_REQUEST,
    });
    const headerConfig = {
      headers: {
        'content-type': 'application-json',
        authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post('/api/teacher/allbatch', headerConfig);
    console.log('batch details er moddhe ki data asche', data);
    dispatch({
      type: BATCH_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BATCH_DETAILS_FAIL,
      payload: error,
    });
  }
};
