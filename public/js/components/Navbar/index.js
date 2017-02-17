'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTitle: '',
      isLoggedIn: false
    };
  }
  render() {

    const { user } = this.props;

    const links = user ? [
      { to: '/profile', text: 'Profile' },
      { to: '/dashboard', text: 'Dashboard' },
      { to: '/logout', text: 'Logout' }
    ] : [
      { to: '/', text: 'Landing Page' },
      { to: '/register', text: 'Register' },
      { to: '/login', text: 'Login' }
    ];

    return (
      <header className='navbar navbar-inverse navbar-fixed-top'>
        <nav className='container'>
          <div className='navbar-header'>
            <button className='collapsed navbar-toggle'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand ion-heart'></a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              { links.map((obj, index) => {
                if (obj.to === '/logout')
                  return <li key={ index }><a href={ obj.to }>{ obj.text }</a></li>;
                return <li key={ index }><Link to={ obj.to }>{ obj.text }</Link></li>;
              }) }
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li class="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a className='ion-gear-b'></a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
