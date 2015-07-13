'use strict';

/**
 * @ngdoc function
 * @name ricardoJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ricardoJsApp
 */
angular.module('ricardoJsApp')

    .controller('MainCtrl', function ($scope, $http, localStorageService) {

      $scope.showThanks = false;
      $scope.subscribed = localStorageService.get('subscribed') || false;


      /**
       * Subscribe the email provided for future notifications
       */
      $scope.subscribe = function() {

        $scope.showThanks = true;
        $scope.subscribed = localStorageService.set('subscribed', true);

        $http.post('http://api.ricardovz.com/subscribe', $scope.email);
      };
    });
