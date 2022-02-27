import {
  SUBJECTS_FAIL,
  SUBJECTS_SUCCESS,
  SUBJECTS_REQUEST,
  CREATE_SUBJECT_FAIL,
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
} from '../constants/subjectConstants.js';

export const subjectsReducers = (state = { loading: false }, action) => {
  switch (action.type) {
    case SUBJECTS_REQUEST:
    case CREATE_SUBJECT_REQUEST:
      return { loading: true };

    case SUBJECTS_SUCCESS:
      return {
        loading: false,
        subjects: action.payload,
      };
    case CREATE_SUBJECT_SUCCESS:
      return {
        loading: false,
        subject: action.payload,
      };

    case CREATE_SUBJECT_FAIL:
    case SUBJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
