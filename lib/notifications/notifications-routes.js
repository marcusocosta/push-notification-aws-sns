'use strict';
var ctrl = require('./controllers/post');

module.exports = function(app) {
  app.post('/api/v1/notifications', ctrl);
}
