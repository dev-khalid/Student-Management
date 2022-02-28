import {
  ALL_STUDENT_FAIL,
  ALL_STUDENT_REQUEST,
  ALL_STUDENT_SUCCESS,
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  ADD_STUDENT_TO_BATCH_FAIL,
  ADD_STUDENT_TO_BATCH_REQUEST,
  ADD_STUDENT_TO_BATCH_SUCCESS,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,
} from '../constants/studentConstants';
import axios from 'axios';

//axios header setting issues fixed .
const userData = JSON.parse(localStorage.getItem('user'));
axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

//Create Student
export const createStudent =
  ({
    name,
    email,
    password,
    contract = undefined,
    role = 'student',
    batchId,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_STUDENT_REQUEST,
      });

      const { data } = await axios.post('/api/teacher/createstudent', {
        name,
        email,
        password,
        contract,
        role,
      });
      //I WANT TO ADD THE STUDENTS RIGHT AWAY TO THE BATCH .
      await axios.patch('api/teacher/addstudenttobatch', {
        studentId: data._id,
        batchId,
      });
      dispatch({
        type: CREATE_STUDENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_STUDENT_FAIL,
        error,
      });
    }
  };

//this token will hold the teacher information
export const addStudentToBatchAction =
  (token, studentId, batchId) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_STUDENT_TO_BATCH_REQUEST,
      });

      const { data } = await axios.patch(
        'api/teacher/addstudenttobatch',
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        },
        {
          studentId,
          batchId,
        }
      );

      dispatch({
        type: ADD_STUDENT_TO_BATCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_STUDENT_TO_BATCH_FAIL,
        error,
      });
    }
  };
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
