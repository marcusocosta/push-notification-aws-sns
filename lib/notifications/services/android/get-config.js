'use strict'
var Promisse = require('bluebird');
var SNS = require('sns-mobile');
var EVENTS = SNS.EVENTS;

module.exports = function() {
  var p = new Promisse(function(resolve, reject) {

    var SNS_KEY_ID = global.SNS_KEY_ID,
      SNS_ACCESS_KEY = global.SNS_ACCESS_KEY,
      ANDROID_ARN = global.SNS_ANDROID_ARN;

    var androidApp = new SNS({
      platform: SNS.SUPPORTED_PLATFORMS.ANDROID,
      region: 'eu-west-1',
      apiVersion: '2010-03-31',
      accessKeyId: SNS_ACCESS_KEY,
      secretAccessKey: SNS_KEY_ID,
      platformApplicationArn: ANDROID_ARN,
      //sandbox: true (This is required for targetting (iOS) APNS_SANDBOX only)
    });

    resolve(androidApp);

  return p;
};
