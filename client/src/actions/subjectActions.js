import {
  CREATE_SUBJECT_FAIL,
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
} from '../constants/subjectConstants';
import axios from 'axios';
//axios header setting issues fixed .
const userData = JSON.parse(localStorage.getItem('user'));
axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

export const createSubject = ({name, batchId}) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_SUBJECT_REQUEST,
    });

    const { data } = await axios.post(
      '/api/teacher/createsubject', 
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
