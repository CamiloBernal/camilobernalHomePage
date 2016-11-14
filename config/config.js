var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development',
  appName = "camilobernalnet",
  azureInsightsInstrumentationKey = "846224f4-ddba-4004-9278-ef8da7fa5f16";


var config = {
  development: {
    root: rootPath,
    app: {
      name: appName
    },
    port: process.env.PORT || 3000,
    azureInsightsKey: azureInsightsInstrumentationKey,
    db: 'mongodb://localhost/camilobernalhomepage-development'
  },

  test: {
    root: rootPath,
    app: {
      name: appName
    },
    port: process.env.PORT || 3000,
    azureInsightsKey: azureInsightsInstrumentationKey,
    db: 'mongodb://localhost/camilobernalhomepage-test'
  },

  production: {
    root: rootPath,
    app: {
      name: appName
    },
    port: process.env.PORT,
    azureInsightsKey: azureInsightsInstrumentationKey,
    db: 'mongodb://camilobernal:WkU3McgSmjKXSxPcBeXQ0Gzx7HxIGpAfM1Vc6YPdnxHcZE4LpeOfX2dT6WsJeZkUljsyqUYTDSvPWxickOrS6A==@camilobernal.documents.azure.com:10250/?ssl=true'
  }
};

module.exports = config[env];
