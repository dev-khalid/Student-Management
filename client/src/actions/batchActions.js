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

//axios header setting issues fixed .
const userData = JSON.parse(localStorage.getItem('user'));
axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

export const createBatch =
  ({ name, fees }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_BATCH_REQUEST });

      const { data } = await axios.post('/api/teacher/createbatch', {
        name,
        fees,
      });
      console.log('which data is coming back ? ', data);
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

export const allBatchs = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_BATCH_REQUEST,
    });

    const { data } = await axios.get('api/teacher/allbatch');
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

export const batch = (batchId) => async (dispatch) => {
  try {
    dispatch({
      type: BATCH_DETAILS_REQUEST,
    });

    const { data } = await axios.post('/api/teacher/allbatch');
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
