
'use strict';

import React from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';

class Layout extends React.Component {
  constructor() {
    super();

    let socketio = io();
  }
  render() {
    return (
      <main>
        { this.props.children }
      </main>
    );
  }
}
module.exports = Layout;
