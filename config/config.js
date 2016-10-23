var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    appName = "camilobernalnet";


var config = {
  development: {
    root: rootPath,
    app: {
      name: appName
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/camilobernalnet'
  },

  test: {
    root: rootPath,
    app: {
      name: appName
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/src-test'
  },

  production: {
    root: rootPath,
    app: {
      name: appName
    },
    port: process.env.PORT,
    db: 'mongodb://localhost/src-production'
  }
};

module.exports = config[env];
