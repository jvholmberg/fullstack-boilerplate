'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './layout';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';

import Landing from './pages/landing';
import Register from './pages/register';
import Login from './pages/login';
import Logout from './pages/logout';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>

        // Nonrestricted routes
        <IndexRoute component={Landing}></IndexRoute>
        <Route path="register" component={Register}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="logout" component={Logout}></Route>

        // Restricted routes
        <Route path="profile" component={Profile}></Route>
        <Route path="dashboard" component={Dashboard}></Route>

      </Route>
    </Router>
  </Provider>
, app);
