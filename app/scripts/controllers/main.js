'use strict';

/**
 * @ngdoc function
 * @name ptsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ptsApp
 */
angular.module('ptsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
