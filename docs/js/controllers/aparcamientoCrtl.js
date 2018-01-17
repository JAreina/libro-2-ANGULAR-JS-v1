"use strict";


var c=angular.module('jareina.aparcamiento',[]);


c.controller('aparcamientoC', ['$scope', function($scope) {



$scope.cars = [{
  marca:"marca1",
  modelo:"modelo1",
  color:"color1"
},
{
  marca:"marca2",
  modelo:"modelo2",
  color:"color2"
},{
  marca:"marca3",
  modelo:"modelo3",
  color:"color3"
},{
  marca:"marca4",
  modelo:"modelo4",
  color:"color4"
}


];


}])
