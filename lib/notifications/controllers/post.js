'use strict';

module.exports = function(req, res, next) {

  var a = req.body;
  console.log(a);

  return res.status(500).end();
}
