import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store';
import 'antd/dist/antd.css';
import axios from 'axios';
//this is being setup automatically . for axios
console.log(process.env.REACT_APP_ENVIRONMENT);
if (process.env.REACT_APP_ENVIRONMENT === 'DEV')
  axios.defaults.baseURL = process.env.REACT_APP_BASEURL_DEVELOPMENT;
else {
  axios.defaults.baseURL = process.env.REACT_APP_BASEURL_PRODUCTION;
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
