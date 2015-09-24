'use strict'
var Promisse = require('bluebird');

module.exports = function globalInit() {
  var p = new Promisse(function(resolve, reject) {

    var SNS_KEY_ID = process.env['SNS_KEY_ID'],
      SNS_ACCESS_KEY = process.env['SNS_ACCESS_KEY'],
      ANDROID_ARN = process.env['SNS_ANDROID_ARN'];

    if (SNS_KEY_ID && SNS_ACCESS_KEY && ANDROID_ARN) {

      global.SNS_KEY_ID = SNS_KEY_ID;
      global.SNS_ACCESS_KEY = SNS_ACCESS_KEY;
      global.ANDROID_ARN = ANDROID_ARN;

      resolve();

    } else {
      reject('Environment variables are not defined');

    }
  });

  return p;
};
