module.exports = function($stateProvider) {
  var module1State = {
    name: 'module1',
    url: '/module1',
    controller: 'Module1Controller as ctrl1',
    template: require('./module1/view.html')
  }

  var module2State = {
    name: 'module2',
    url: '/module2',
    controller: 'Module2Controller as ctrl2',
    template: require('./module2/view.html')
  }
  
  var module3State = {
    name: 'module3',
    url: '/module3',
    controller: 'Module3Controller as ctrl3',
    template: require('./module3/module').template
  }
  
  $stateProvider.state(module1State);
  $stateProvider.state(module2State);
  $stateProvider.state(module3State);
};