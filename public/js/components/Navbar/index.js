'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navbar extends React.Component {
  constructor() {
    super();
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
      <nav>
        <ul>
          { links.map((obj, index) => {
            if (obj.to === '/logout')
              return <li key={ index }><a href={ obj.to }>{ obj.text }</a></li>;
            return <li key={ index }><Link to={ obj.to }>{ obj.text }</Link></li>;
          }) }
        </ul>
      </nav>
    );


  }
}
