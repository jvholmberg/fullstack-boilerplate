'use strict';

import axios from 'axios';

export function register(username, password, password2) {
  return (dispatch) => {
    axios.post('/user/register', {
      username: username,
      password: password,
      password2: password2
    }).then((res) => {
        dispatch({
          type: 'REGISTER_USER_FULFILLED',
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'REGISTER_USER_REJECTED',
          payload: res.data
        });
      });
  };
}

export function login(username, password) {
  return (dispatch) => {
    axios.post('/user/login', {
      username: username,
      password: password
    }).then((res) => {
      dispatch({
        type: 'LOGIN_USER_FULFILLED',
        payload: res.data
      });
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_USER_REJECTED',
          payload: res.data
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
