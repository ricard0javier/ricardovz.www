'use strict';

/**
 * @ngdoc directive
 * @name ricardoJsApp.directive:wpApiPost
 * @description
 * # wpApiPost
 */
angular.module('ricardoJsApp')
    .directive('apiPost', function ($compile) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.ngBindHtml, function () {

            // code tags
            angular.forEach(element.find('code'), function (code) {
              code = angular.element(code);
              code.attr('hljs', '');

              var parsedHtml = code.html().replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
              code.html(parsedHtml);

              $compile(code)(scope);
            });

            // img tags
            angular.forEach(element.find('img'), function (img) {
              img = angular.element(img);
              img.addClass('img-responsive');
              $compile(img)(scope);
            });
          });
        }
      };
    });