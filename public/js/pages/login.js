'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/user';

import Navbar from '../components/Navbar/';
import InputGroup from '../components/InputGroup/';

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
    let dataObj = {};
    ['username', 'password'].map((fieldName) => {
      dataObj[fieldName] = document.getElementsByName(fieldName)[0].value;
    });
    this.props.dispatch(login(dataObj));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <form onSubmit={this._formSubmit}>
            <h1>Login</h1>
            <InputGroup title='Username' name='username' />
            <InputGroup title='Password' name='password' />
            <button className='btn btn-primary'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
