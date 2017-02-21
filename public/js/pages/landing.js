'use strict';

import React from 'react';

import Header from '../components/Header/';
import Sidebar from '../components/Sidebar/';

export default class Landing extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className='container'>
          <div class="jumbotron">
            <h1>Join now</h1>
            <p>Start register your exercises to take your training to the next level. Its completely free, what do you got to lose</p>
            <p><a class="btn btn-primary btn-lg">Sign up</a></p>
          </div>
        </div>
      </div>
    );
  }
}
