'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';

import Header from '../components/Header/';

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
        <Header user={this.props.user} />
      </div>
    );
  }
}
