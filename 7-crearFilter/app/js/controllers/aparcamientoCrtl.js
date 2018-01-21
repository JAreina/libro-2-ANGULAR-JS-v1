"use strict";


var c=angular.module('jareina.aparcamiento',[]);


c.controller('aparcamientoC', ['$scope','$filter', function($scope,$filter) {


  $scope.appTitle = $filter("uppercase")("JAreina");

$scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
$scope.otro="";
  $scope.cars = [{
      plate: '6MBV006',
      color:"verde",
      entrance: "2018-01-18"
    },
    {
      plate: '5BBM299',
      color:"tomato",
        entrance: "2018-01-18"
    },
    {
      plate: '5AOJ230',
      color:"negro",
        entrance: "2018-01-18"
    }
  ];
console.log("controllladro")

  $scope.park = function(car) {
    car.entrance = new Date();
    $scope.cars.push(angular.copy(car));
    delete $scope.car;
  };
}])


// crear filter
c.filter("plate", function() {
return function(input) {
  var separator=" - " ;
var firstPart = input.substring(0,3);
var secondPart = input.substring(3);
return firstPart + separator + secondPart;
};
});
