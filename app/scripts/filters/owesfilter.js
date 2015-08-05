'use strict';

/**
 * @ngdoc filter
 * @name ricardoJsApp.filter:owesFilter
 * @function
 * @description
 * # owesFilter
 * Filter in the ricardoJsApp.
 */
angular.module('ricardoJsApp')
    .filter('owesFilter', function ($filter) {
        return function (input, total) {

            if (input === undefined || total == undefined) {
                return '';
            }

            var owe = (total / 2) - input;

            var result = $filter('number')(input, 2) + ' £';

            if (owe > 0) {
                result = result + ' (owes ' + $filter('number')(owe, 2) + ' £)';
            }

            return result;
        };
    });
