'use strict';

import axios from 'axios';
import { browserHistory } from 'react-router';

export function register(dataObj) {
  axios.post('/user/register', dataObj).then((res) => {
      browserHistory.push('/login');
    })
    .catch((err) => {
      console.log(err);
    });
}

export function login(dataObj) {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_USER' });
    axios.post('/user/login', dataObj).then((res) => {
      dispatch({
        type: 'LOGIN_USER_FULFILLED',
        payload: res.data
      });
      browserHistory.push('/dashboard');
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_USER_REJECTED',
          payload: err
        });
      });
  };
}

export function logout() {
  return (dispatch) => {
    axios.post('/user/logout').then((res) => {
        dispatch({
          type: 'LOGOUT_USER_FULFILLED',
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'LOGOUT_USER_REJECTED',
          payload: res.data
        });
      });
  };
}

export function profile() {
  return (dispatch) => {
    axios.get('/user/profile').then((res) => {
        dispatch({
          type: 'FETCH_USER_FULFILLED',
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_REJECTED',
          payload: res.data
        });
      });
  };
}

export function changePassword() {
  return {

  };
}
