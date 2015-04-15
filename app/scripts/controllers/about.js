'use strict';

/**
 * @ngdoc function
 * @name ptsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ptsApp
 */
angular.module('ptsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
