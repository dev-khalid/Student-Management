import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducers';

const reducers = combineReducers({
  ghorarDim: (state = {}) => {
    return state;
  },
  user: userReducer,
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
