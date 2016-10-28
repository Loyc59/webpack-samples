'use strict'; 

require('./style.scss');

var template = require('./view.html');
var ngModule = angular.module('Module3', []);

ngModule.controller('Module3Controller', require('./controller'));

//Module3
module.exports = {
  module: ngModule,
  template: template
};