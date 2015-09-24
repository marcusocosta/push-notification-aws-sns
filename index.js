'use strict'
var express = require('express');
var globalInit = require('./global-init');

var app = express();

globalInit()
  .catch(function(err) {
    console.log(err);
  });

require('./config')(app);
require('./lib')(app);

var server = app.listen('3001', function() {
  var port = server.address().port;
});

return app;
