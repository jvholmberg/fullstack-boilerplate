'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { register } from '../actions/user';

import Navbar from '../components/Navbar/';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this._formSubmit = this._formSubmit.bind(this);
  }

  _formSubmit(e) {
    e.preventDefault();
    this.props.dispatch(register(
      document.getElementsByName('username')[0].value,
      document.getElementsByName('password')[0].value,
      document.getElementsByName('password2')[0].value,
      document.getElementsByName('displayName')[0].value
    ));
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Register</h1>
        <form onSubmit={this._formSubmit}>
          <label>
            Name
            <input className='form-control' type='text' name='displayName' />
          </label><br/>
          <label>
            Email
            <input className='form-control' type='text' name='username' />
          </label><br/>
          <label>
            Password
            <input className='form-control' type='password' name='password' />
          </label><br/>
          <label>
            Confirm Password
            <input className='form-control' type='password' name='password2' />
          </label><br/>
          <button className='btn primary2'>Register</button>
        </form>
      </div>
    );
  }
}
