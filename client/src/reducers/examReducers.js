import {
  ALL_EXAM_FAIL,
  ALL_EXAM_REQUEST,
  ALL_EXAM_SUCCESS,
  EXAM_DETAILS_FAIL,
  EXAM_DETAILS_REQUEST,
  EXAM_DETAILS_SUCCESS,
} from '../constants/examConstants';

export const examsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ALL_EXAM_REQUEST:
      return {
        loading: true,
      };
    case ALL_EXAM_SUCCESS:
      return {
        loading: false,
        exams: action.payload,
      };
    case ALL_EXAM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const examDetailsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case EXAM_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case EXAM_DETAILS_SUCCESS:
      return {
        loading: false,
        exam: action.payload,
      };
    case EXAM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
