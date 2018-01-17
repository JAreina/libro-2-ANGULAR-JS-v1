"use strict";


var c=angular.module('jareina.aparcamiento',[]);


c.controller('aparcamientoC', ['$scope', function($scope) {

$scope.titulo = "JAreina ng-bind";
$scope.titulo2="JAreina ng-bind-html \n "+
'Pretty text with some links:\n' +
    'http://angularjs.org/,\n' +
    'mailto:us@somewhere.org,\n' +
    'another@somewhere.org,\n' +
    'and one more: ftp://127.0.0.1/.';
}])
