var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'fullstack-boilerplate'
    },
    port: process.env.PORT || 8000,
    db: 'mongodb://localhost/fullstack-boilerplate-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'fullstack-boilerplate'
    },
    port: process.env.PORT || 8000,
    db: 'mongodb://localhost/fullstack-boilerplate-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fullstack-boilerplate'
    },
    port: process.env.PORT || 8000,
    db: 'mongodb://localhost/fullstack-boilerplate-production'
  }
};

module.exports = config[env];
