import {
  ALL_EXAM_FAIL,
  ALL_EXAM_REQUEST,
  ALL_EXAM_SUCCESS,
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

/**
 * @reducer - create Exam reducer is combined with this one .
 */
export const examDetailsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case EXAM_DETAILS_REQUEST:
    case CREATE_EXAM_REQUEST:
    case PUBLISH_RESULT_REQUEST:
      return {
        loading: true,
      };
    case EXAM_DETAILS_SUCCESS:
    case CREATE_EXAM_SUCCESS:
    case PUBLISH_RESULT_SUCCESS:
      return {
        loading: false,
        exam: action.payload,
      };
    case EXAM_DETAILS_FAIL:
    case PUBLISH_RESULT_FAIL:
    case CREATE_EXAM_FAIL:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
