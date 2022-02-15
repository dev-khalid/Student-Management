import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  ghorarDim: (state = {}) => {
    return state;
  },
});
const middlewares = [thunk];
const initialState = {
  ghorarDim: 'ghora jei dim pare',
};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
