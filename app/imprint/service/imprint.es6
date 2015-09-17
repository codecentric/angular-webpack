'use strict';

module.exports = function() {

  var text = 'Example app for using AngularJS with webpack - ' +
    'by Benedikt Ritter (adopted from the AngularJS with ' +
    'Browserify example by Bastian Krol). Use at your own risk :P';

  this.getText = function() {
    return text;
  };

};
