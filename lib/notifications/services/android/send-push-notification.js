var getConfig = require('get-config');
var Promisse = require('bluebird');

module.exports = function(tag, message) {

  var p = new Promisse(function(resolve, reject) {

    getConfig()
      .then(function(androidApp) {

        androidApp.addUser(tag, JSON.stringify({
          some: 'extra data'
        }), function(err, endpointArn) {
          if (err) {
            reject(err);
          }

          // Send a simple String or data to the client
          androidApp.sendMessage(enpointArn, message, function(err, messageId) {
            if (err) {
              reject(err);
            }

            console.log('Message sent, ID was: ' + messageId);
            resolve(messageId);
          });
        });
      }).catch(function(err) {

        console.log(err);
        reject(err);
      })
  });

  return p;
}
