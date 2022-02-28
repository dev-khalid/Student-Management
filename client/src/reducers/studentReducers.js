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

export const createStudentReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
      return {
        loading: true,
      };
    case CREATE_STUDENT_SUCCESS:
      return {
        loading: false,
        student: action.payload,
      };
    case CREATE_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const studentsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ALL_STUDENT_REQUEST:
      return {
        loading: true,
      };
    case ALL_STUDENT_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case ALL_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const studentDetailsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case STUDENT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case STUDENT_DETAILS_SUCCESS:
      return {
        loading: false,
        student: action.payload,
      };
    case STUDENT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addStudentToBatchReducer = (
  state = { loading: false },
  action
) => {
  switch (action.type) {
    case ADD_STUDENT_TO_BATCH_REQUEST:
      return { loading: true };
    case ADD_STUDENT_TO_BATCH_SUCCESS:
      return { loading: false, updatedBatch: action.payload };
    case ADD_STUDENT_TO_BATCH_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
