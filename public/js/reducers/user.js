'use strict';

export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: null,
    user: {
      token: null,
      username: null,
      displayName: null,
      email: null,
      conversations: [],
      notifications: [],
      memberOf: [],
      pendingInvites: []
    }
  }, action) {
    switch (action.type) {
      case 'LOGIN_USER':
      case 'FETCH_USER':
        return {
          ...state
          , fetching: true
        };
      case 'LOGIN_USER_REJECTED':
      case 'FETCH_USER_REJECTED':
        return {
          ...state
          , fetching: false
          , error: action.payload
        };
      case 'LOGIN_USER_FULFILLED':
      case 'FETCH_USER_FULFILLED':
        return {
          ...state
          , fetching: false
          , fetched: true
          , user: action.payload
        };
  }
  return state;
};
