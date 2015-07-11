'use strict';

/**
 * @ngdoc function
 * @name ricardoJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ricardoJsApp
 */
angular.module('ricardoJsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.showThanks = false;

    $scope.subscribe = function() {

      $scope.showThanks = true;

      $http.post('http://api.ricardovz.com/subscribe', $scope.email);
    };
  });
