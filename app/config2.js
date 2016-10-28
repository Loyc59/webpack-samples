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
    templateProvider: ['$q', function ($q) {
      var deferred = $q.defer();
      require.ensure(['./module2/view.html'], function () {
          var template = require('./module2/view.html');
          deferred.resolve(template);
      });
      return deferred.promise;
    }],
    resolve: {
      loadModule: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
        var deferred = $q.defer();
        require.ensure([], function () {
          var module = require('./module2/module');
          $ocLazyLoad.load({
            name: 'Module2'
          });
          deferred.resolve(module);
        });
        return deferred.promise;
      }]
    }
  }
  
  var module3State = {
    name: 'module3',
    url: '/module3',
    controller: 'Module3Controller as ctrl3',
    templateProvider: ['$q', function ($q) {
      var deferred = $q.defer();
      require.ensure([], function () {
          var template = require('./module3/module').template;
          deferred.resolve(template);
      });
      return deferred.promise;
    }],
    resolve: {
      loadModule: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
        var deferred = $q.defer();
        require.ensure([], function () {
          var module = require('./module3/module').module;
          $ocLazyLoad.load({
            name: module.name
          });
          deferred.resolve(module);
        });
        return deferred.promise;
      }]
    }
  }

  $stateProvider.state(module1State);
  $stateProvider.state(module2State);
  $stateProvider.state(module3State);
};