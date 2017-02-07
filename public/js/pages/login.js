'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/user';

import Navbar from '../components/Navbar/';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this._formSubmit = this._formSubmit.bind(this);
  }
  
  _formSubmit(e) {
    e.preventDefault();
    this.props.dispatch(login(
      document.getElementsByName('username')[0].value,
      document.getElementsByName('password')[0].value
    ));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <form onSubmit={this._formSubmit}>
            <h1>Login</h1>
            <label>
              Email
              <input className='form-control' type='text' name='username' />
            </label>
            <label>
              Password
              <input className='form-control' type='password' name='password' />
            </label>
            <button className='btn primary2'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
