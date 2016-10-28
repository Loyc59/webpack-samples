module.exports = angular.module(
  'myApp',
  [
    'ui.router',
    'oc.lazyLoad',
    require('./module1/module').name,
    require('./module2/module').name,
    require('./module3/module').module.name
  ]
);