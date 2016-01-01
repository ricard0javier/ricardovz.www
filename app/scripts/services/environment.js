'use strict';

/**
 * @ngdoc service
 * @name ricardoJsApp.environment
 * @description
 * # environment
 * Service in the ricardoJsApp.
 */
angular.module('ricardoJsApp')
  .service('environment', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var apiEndpoint = "http://api.ricardovz.com:8080";

        return {
            apiUsers: apiEndpoint + "/users",
            apiReceipts: apiEndpoint + "/receipts"
        }
  });
