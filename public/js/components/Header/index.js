import React from 'react';
import pubsub from 'pubsub-js';
import { Dropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  _toggleSidebar(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('active');
    pubsub.publish('toggleSidebar');
  }

  render() {
    const ddMenuItem = (
      <span>
        <em className="ion-person"></em>
        <sup className="badge bg-danger">3</sup>
      </span>
    );

    return (
      <header className="header-container">
        <nav>
          <ul className="visible-xs visible-sm">
            <li>
              <a onClick={this._toggleSidebar} href="#" className="menu-link menu-link-slide">
                <span>
                  <em></em>
                </span>
              </a>
            </li>
          </ul>
          <ul className="hidden-xs">
            <li>
              <a id="offcanvas-toggler" href="#" className="menu-link menu-link-slide">
                <span>
                  <em></em>
                </span>
              </a>
            </li>
          </ul>
          <h2 className="header-title">Title</h2>
          {/* <ul className="pull-right">
            <li>
              <a href="#" className="ripple" onClick={this.showSearch}>
                <em className="ion-ios-search-strong"></em>
              </a>
            </li>
            <Dropdown id="basic-nav-dropdown" pullRight componentClass="li">
              <Dropdown.Toggle useAnchor noCaret className="has-badge">
                <em className="ion-person"></em>
                <sup className="badge bg-danger">3</sup>
              </Dropdown.Toggle>
              <Dropdown.Menu className="md-dropdown-menu">
                <LinkContainer to="pages/profile">
                  <MenuItem eventKey={3.1}>
                    <em className="ion-home icon-fw"></em>
                    Profile
                  </MenuItem>
                </LinkContainer>
                <LinkContainer to="pages/messages">
                  <MenuItem eventKey={3.2}>
                    <em className="ion-gear-a icon-fw"></em>Messages</MenuItem>
                </LinkContainer>
                <MenuItem divider/>
                <LinkContainer to="/login">
                  <MenuItem eventKey={3.3}>
                    <em className="ion-log-out icon-fw"></em>Logout</MenuItem>
                </LinkContainer>
              </Dropdown.Menu>
            </Dropdown>
            <li>
              <a href="#" className="ripple" onClick={this.showSettings}>
                <em className="ion-gear-b"></em>
              </a>
            </li>
          </ul> */}
        </nav>
      </header>
    );
  }
}
