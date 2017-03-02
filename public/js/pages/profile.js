'use strict';

import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user';
import Header from '../components/Header/';

@connect((store) => {
  return {
    user: store.user
  };
})
export default class Profile extends React.Component {

  componentWillMount() {
    this.props.dispatch(user.profile());

  }

  render() {
    return (
      <div>
        <Header user={this.props.user.user} />
      </div>
    );
  }
}
