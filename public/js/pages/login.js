'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, FormGroup } from 'react-bootstrap';

import { login } from '../actions/user';

import Header from '../components/Header/';

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
        <Header />
        <div className='container'>
          <form onSubmit={this._formSubmit}>
            <h1>Login</h1>
            <FormGroup>
              <FormControl type='text' name='username' placeholder='Username' />
              <FormControl type='password' name='password' placeholder='Password' />
            </FormGroup>
            <ButtonToolbar>
              <Button bsSize='small' bsStyle='primary'>Login</Button>
              <Button bsSize='small'>Small button</Button>
            </ButtonToolbar>
          </form>
        </div>
      </div>
    );
  }
}
