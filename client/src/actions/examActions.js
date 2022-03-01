import {
  CREATE_EXAM_FAIL,
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  EXAM_DETAILS_FAIL,
  EXAM_DETAILS_REQUEST,
  EXAM_DETAILS_SUCCESS,
  PUBLISH_RESULT_FAIL,
  PUBLISH_RESULT_REQUEST,
  PUBLISH_RESULT_SUCCESS,
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

/**
 * @ROUTE patch - /api/teacher/publishresult
 * @Request body - {examId,participants: [{studentId: 'something' , mark: 50}]}
 */
export const publishResultAction = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: PUBLISH_RESULT_REQUEST,
    });
    const { examId, participants } = obj;

    console.log('whats inside object', obj);

    const { data } = await axios.patch('/api/teacher/publishresult', {
      examId,
      participants,
    });
    dispatch({
      type: PUBLISH_RESULT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUBLISH_RESULT_FAIL,
      error: error,
    });
  }
};

export const examDetailsAction = (examId) => async (dispatch) => {
  try {
    dispatch({
      type: EXAM_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/exam/examdetails/${examId}`);
    dispatch({
      type: EXAM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXAM_DETAILS_FAIL,
      error: error,
    });
  }
};
