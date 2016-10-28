'use strict'; 

// load the main app file
var appModule = require('./index');

// load the main style file
require('./styles/main.scss');

// config the app
appModule.config(require('./config'));

// bootstrap
angular.element(document).ready(function () {  
  angular.bootstrap(document, [appModule.name]);
});