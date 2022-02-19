import {
  ALL_STUDENT_FAIL,
  ALL_STUDENT_REQUEST,
  ALL_STUDENT_SUCCESS,
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
} from '../constants/studentConstants';
import axios from 'axios';

export const allStudents = (token) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_STUDENT_REQUEST,
    });

    const { data } = await axios.get('api/teacher/allstudents', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: ALL_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_STUDENT_FAIL,
      error,
    });
  }
};

//I will need this later on.

// export const student = (studentId) => async(dispatch) => {
//   try {
//     dispatch({
//       type: STUDENT_DETAILS_REQUEST,
//     });

//     const { data } = await axios.get('api/teacher/allstudents', {
//       headers: {
//         'content-type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//     });

//     dispatch({
//       type: STUDENT_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_STUDENT_FAIL,
//       error,
//     });
//   }
// }
