import {
  SUBJECTS_FAIL,
  SUBJECTS_SUCCESS,
  SUBJECTS_REQUEST,
} from '../constants/subjectConstants.js';

export const subjectsReducers = (state = { loading: false }, action) => {
  switch (action.type) {
    case SUBJECTS_REQUEST:
      return { loading: true };

    case SUBJECTS_SUCCESS:
      return {
        loading: false,
        subjects: action.payload,
      };
    case SUBJECTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
