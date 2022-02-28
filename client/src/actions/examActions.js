import {
  CREATE_EXAM_FAIL,
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
} from '../constants/examConstants';

import axios from 'axios';

//axios header setting issues fixed .
const userData = JSON.parse(localStorage.getItem('user'));
axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

export const createExam =
  ({
    batchId,
    totalMark,
    examDate,
    startTime,
    endTime,
    publishDate = undefined,
    subjectName,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_EXAM_REQUEST,
      });

      const { data } = await axios.post('/api/teacher/createexam', {
        batchId,
        totalMark,
        examDate,
        startTime,
        endTime,
        publishDate,
        subjectName,
      });
      dispatch({
        type: CREATE_EXAM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_EXAM_FAIL,
        error: error,
      });
    }
  };
