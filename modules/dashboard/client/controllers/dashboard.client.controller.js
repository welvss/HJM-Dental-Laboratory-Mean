(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope) {
    var vm = this;

    $scope.date = new Date();
    $scope.navModules = [
      {
        icon: 'doctor',
        name: 'Customer',
        colorClass: 'customer-card'
      },
      {
        icon: 'file text outline',
        name: 'Cases',
        colorClass: 'cases-card'
      },
      {
        icon: 'cubes',
        name: 'Inventory',
        colorClass: 'inventory-card'
      },
      {
        icon: 'shop',
        name: 'Purchase Order',
        colorClass: 'po-card'
      },
      {
        icon: 'truck',
        name: 'Supplier',
        colorClass: 'supplier-card'
      }
    ];
    $scope.caseStatutes = [
      {
        color: 'green',
        icon: 'file text outline',
        animation: 'hvr-wobble-vertical',
        label: 'NEW CASES'
      },
      {
        color: 'purple',
        icon: 'lab',
        animation: 'hvr-wobble-vertical',
        label: 'IN PRODUCTION'
      },
      {
        color: 'blue',
        icon: 'circle check',
        animation: 'hvr-wobble-vertical',
        label: 'COMPLETED CASE'
      },
      {
        color: 'red',
        icon: 'warning circle',
        animation: 'hvr-wobble-vertical',
        label: 'ON HOLD'
      }

    ];
    // Dashboard controller logic
    // ...

    init();

    function init() {
    }
  }
})();
