'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';

import Navbar from '../components/Navbar/';

@connect((store) => {
  return {
    user: store.user.user,
  };
})
export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar user={this.props.user} />
      </div>
    );
  }
}
