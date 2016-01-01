'use strict';

/**
 * @ngdoc function
 * @name ricardoJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ricardoJsApp
 */
angular.module('ricardoJsApp')
  .controller('BlogCtrl', function ($scope, $http) {

      $scope.contentLoaded = false;

      $http.get('http://cms.ricardovz.com/wp-json/posts').success(function(data) {

        $scope.contentLoaded = true;
        $scope.posts = data;

      });
  });
