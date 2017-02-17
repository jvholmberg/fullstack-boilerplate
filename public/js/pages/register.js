'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { register } from '../actions/user';

import Navbar from '../components/Navbar/';
import InputGroup from '../components/InputGroup/';

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
    let dataObj = {};
    ['username', 'password', 'password2', 'displayName'].map((fieldName) => {
      dataObj[fieldName] = document.getElementsByName(fieldName)[0].value;
    });
    register(dataObj);
  }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <h1>Register</h1>
        <form onSubmit={this._formSubmit}>
          <InputGroup title='Name' name='displayName' />
          <InputGroup title='Username' name='username' />
          <InputGroup title='Password' name='password' />
          <InputGroup title='Confirm Password' name='2assword' />
          <button className='btn primary2'>Register</button>
        </form>
      </div>
    );
  }
}
