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

/* production 
axios.defaults.baseURL =
  'https://khalid-student-management.herokuapp.com/';
*/
axios.defaults.baseURL = 'http://localhost:5000/';

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
