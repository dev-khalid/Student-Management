import {
  ALL_STUDENT_FAIL,
  ALL_STUDENT_REQUEST,
  ALL_STUDENT_SUCCESS,
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
} from '../constants/studentConstants';

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
