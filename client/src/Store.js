import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducers';
import {
  batchsReducer,
  batchDetailsReducer,
} from './reducers/batchReducers.js';
import {
  studentDetailsReducer,
  studentsReducer,
} from './reducers/studentReducers';

import { examDetailsReducer, examsReducer } from './reducers/examReducers.js';
import { subjectsReducers } from './reducers/subjectReducers';

const reducers = combineReducers({
  ghorarDim: (state = {}) => {
    return state;
  },
  user: userReducer,
  batchs: batchsReducer,
  batchDetails: batchDetailsReducer,
  students: studentsReducer,
  studentDetails: studentDetailsReducer,
  exams: examsReducer,
  examDetails: examDetailsReducer,
  subjects: subjectsReducers,
});
const middlewares = [thunk];
const initialState = {
  ghorarDim: 'ghora jei dim pare',
  user: { user: JSON.parse(localStorage.getItem('user')) },
};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
