"use strict";


var c=angular.module('jareina.aparcamiento',[]);


c.controller('aparcamientoC', ['$scope', function($scope) {

$scope.otro="";
  $scope.cars = [{
      plate: '6MBV006'
    },
    {
      plate: '5BBM299'
    },
    {
      plate: '5AOJ230'
    }
  ];
console.log("controllladro")

  $scope.park = function(car) {
    $scope.cars.push(angular.copy(car));
    delete $scope.car;
  };
}])
