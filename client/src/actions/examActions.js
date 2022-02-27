import {
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  CREATE_EXAM_FAIL,
} from '../constants/examContstants';

import axios from 'axios';

export const createExam =
  (
    token,
    batchId,
    mark,
    examDate,
    startTime,
    endTime,
    publishDate = undefined
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_EXAM_REQUEST,
      });

      const { data } = await axios.post(
        '/api/teacher/createexam',
        {
          headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        },
        {
          batchId,
          mark,
          examDate,
          startTime,
          endTime,
          publishDate,
        }
      );
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
