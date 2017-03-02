import React from 'react';
import {Link} from 'react-router';
import pubsub from 'pubsub-js';

export default class Sidebar extends React.Component {

  constructor(props, context) {
    super(props, context);
    this._isRouteActive = this._isRouteActive.bind(this);
    this._getRoute = this._getRoute.bind(this);
    this._mapRoutes = this._mapRoutes.bind(this);
    this._populate = this._populate.bind(this);
  }

  componentWillMount() {
    this.pubsub_token = pubsub.subscribe('toggleSidebar', (e) => {
      this._toggleSidebar();
    });
  }

  componentWillUnmount() {
    pubsub.unsubscribe(this.pubsub_token);
  }

  _toggleSidebar() {
    alert('Not implemented');
  }

  _isRouteActive(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    paths.map((p) => {
      if (this.context.router.isActive('' + paths[p]) === true) {
        return 'active';
      }
    });
    return '';
  }

  _mapRoutes(links) {
    return links.map((l, i) => {
      return this._getRoute(l, i);
    });
  }

  _getRoute(link, key) {
    console.log(link);
    // Execute recursive if children exists
    var childNodes, childNodesExist;
    if (link.childNodes !== undefined) {
      childNodes = link.childNodes.map((cn, i) => {
        return this._getRoute(cn, i*100);
      });
    }

    return (
      <li key={key} className={this._isRouteActive(link.activeRoute)}>
        <Link to={link.route}>
          <span className='pull-right nav-label'></span>
          <span className='nav-icon'>
            <i className={ link.icon } />
          </span>
          <span>{ link.title }</span>
        </Link>
        {childNodes != null ? <ul> { childNodes } </ul> : '' }
      </li>
    );
  }

  _populate() {
    let data = [
      { title: 'Dashboard', icon: 'ion-briefcase', route: 'dashboard', activeRoute: '/dashboard' },
      { title: 'Graphs', icon: 'ion-briefcase', route: 'graphs', activeRoute: '/graphs' },
      { title: 'History', icon: 'ion-briefcase', route: 'history', activeRoute:
        ['/history', '/lastweek', '/lastmonth', '/lastyear'], childNodes: [
        { title: 'Last week', icon: 'ion-briefcase', route: 'lastweek', activeRoute: '/lastweek' },
        { title: 'Last Month', icon: 'ion-briefcase', route: 'lastmonth', activeRoute: '/lastmonth' },
        { title: 'Last Year', icon: 'ion-briefcase', route: 'lastyear', activeRoute: '/lastyear' }
      ]}
    ];
    return this._mapRoutes(data);
  }

  render() {

    return (
      <aside className='sidebar-container'>
        <div className='sidebar-header'>
          <div className='pull-right pt-lg text-muted hidden'>
            <em className='ion-close-round'></em>
          </div>
          <a href='#' className='sidebar-header-logo'><img src='img/logo.png' data-svg-replace='img/logo.svg' alt='Logo'/>
            <span className='sidebar-header-logo-text'>Centric</span>
          </a>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-toolbar text-center'>
            <a href=''><img src='img/user/01.jpg' alt='Profile' className='img-circle thumb64'/></a>
            <div className='mt'>Welcome, Willie Webb</div>
          </div>
          <nav className='sidebar-nav'>
            <ul>

              { this._populate() }

            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.object
};
