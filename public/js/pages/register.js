'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, FormGroup } from 'react-bootstrap';

import { register } from '../actions/user';

import Header from '../components/Header/';

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
        <Header />
        <h1>Register</h1>
        <form onSubmit={this._formSubmit}>
          <FormGroup>
            <FormControl type='text' name='displayName' placeholder='Name' />
            <FormControl type='text' name='username' placeholder='Username' />
            <FormControl type='password' name='password' placeholder='Password' />
            <FormControl type='password' name='password2' placeholder='Confirm Password' />
          </FormGroup>
          <ButtonToolbar>
            <Button bsSize='small' bsStyle='primary'>Register</Button>
            <Button bsSize='small'>Small button</Button>
          </ButtonToolbar>
        </form>
      </div>
    );
  }
}
