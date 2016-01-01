'use strict';

/**
 * @ngdoc directive
 * @name ricardoJsApp.directive:navBarState
 * @description
 * # navBarState
 */
angular.module('ricardoJsApp')
  .directive('navBarState', ['$location', function ($location) {
    return {
      restrict: 'A',
      replace: false,
      link: function postLink(scope, element, attrs) {

        scope.$on("$routeChangeSuccess", function () {

          var hrefs = [
              '/#!' + $location.path(),
              '#!' + $location.path(),
              $location.path()
          ];

          angular.forEach(element.find('a'), function (a) {

            a = angular.element(a);

            if (-1 !== hrefs.indexOf(a.attr('href'))) {

              a.parent().addClass('active');

            }
            else {

              a.parent().removeClass('active');

            }

          });

        });

      }
    };
  }]);
