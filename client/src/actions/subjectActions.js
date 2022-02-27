import {
  CREATE_SUBJECT_FAIL,
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
} from '../constants/subbjectConstants';
import axios from 'axios';

//this token will hold the teacher information
export const createSubject = (token, name, batchId) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_SUBJECT_REQUEST,
    });

    const { data } = await axios.post(
      'api/teacher/createsubject',
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      },
      {
        name,
        batchId,
      }
    );

    dispatch({
      type: CREATE_SUBJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SUBJECT_FAIL,
      error,
    });
  }
};
