'use strict';

import React from 'react';

import Navbar from '../components/Navbar/';

export default class Landing extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <div class="jumbotron">
          <h1>Join now</h1>
          <p>Start register your exercises to take your training to the next level. Its completely free, what do you got to lose</p>
          <p><a class="btn btn-primary btn-lg">Sign up</a></p>
        </div>
      </div>
    );
  }
}
