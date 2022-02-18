import {
  ALL_BATCH_FAIL,
  ALL_BATCH_REQUEST,
  ALL_BATCH_SUCCESS,
  BATCH_DETAILS_FAIL,
  BATCH_DETAILS_REQUEST,
  BATCH_DETAILS_SUCCESS,
} from '../constants/batchConstants';
import axios from 'axios';
import { header } from 'express/lib/request';
export const allBatchs = (token) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_BATCH_REQUEST,
    });
    const headerConfig = {
      headers: {
        'content-type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA4NmQyMWEzOTcxOGE3ZTNlYzE5YmQiLCJuYW1lIjoiS2hhbGlkIEhvc3NhaW4iLCJlbWFpbCI6ImtoYWxpZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQuc1l2SkhsL0RiUGZ0NXExNWc0eFEuUmxZak9DdDM3dWNxTlZaU2xGaUZoVXBCMVdCM0lULiIsInJlZ2lzdGVyVHlwZSI6ImVtYWlscGFzcyIsInJvbGUiOiJhZG1pbiIsImNvbnRyYWN0Ijoic29tZXRoaW5nQGdtYWlsLmNvbSIsIl9fdiI6MCwiaWF0IjoxNjQ1MDI0ODAxfQ.wwOYsJbdv4AmCH1_TAb9A1FTt0Y-TEGunUlvhfDxqQ0',
      },
    };
    const { data } = await axios.get('api/teacher/allbatch', headerConfig);
    console.log('batchs er moddhe ki data asche', data);
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
