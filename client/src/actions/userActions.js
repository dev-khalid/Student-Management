import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post('api/user/login', {
      email,
      password,
    });
    console.log('ki data asche action er moddhe . ', data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('user',JSON.stringify(data)); 
  } catch (error) {
    console.error(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = (token) => async (dispatch) => {
  try {
    await fetch('/api/user/logout', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + token,
      },
    });
    localStorage.removeItem('user'); 
    dispatch({
      type: USER_LOGOUT,
    });
  } catch (err) {
    console.error(err);
  }
};
