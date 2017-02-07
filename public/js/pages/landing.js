'use strict';

import React from 'react';

import Navbar from '../components/Navbar/';

export default class Landing extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        Landing
      </div>
    );
  }
}
