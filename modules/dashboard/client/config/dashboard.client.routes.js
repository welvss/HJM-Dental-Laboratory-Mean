(function () {
  'use strict';

  //Setting up route
  angular
    .module('dashboard')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Dashboard state routing
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'modules/dashboard/client/views/dashboard.client.view.html',
        data: {
          roles: ['user', 'admin']
        },
        controller: 'DashboardController',
        controllerAs: 'vm'
      });
  }
})();
