var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  appInsights = require("applicationinsights"),
  azureInsightsInstrumentationKey = "846224f4-ddba-4004-9278-ef8da7fa5f16";


mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

appInsights.setup(azureInsightsInstrumentationKey).start();

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

