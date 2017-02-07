'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar/';
import { logout } from '../actions/user';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Logout extends React.Component {

  constructor() {
    super();
  }
  componentWillMount() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>
        <Navbar />
        Logout
      </div>
    );
  }
}
