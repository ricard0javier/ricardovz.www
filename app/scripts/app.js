'use strict';

/**
 * @ngdoc overview
 * @name ricardoJsApp
 * @description
 * # ricardoJsApp
 *
 * Main module of the application.
 */
angular
    .module('ricardoJsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule',
        'ui.bootstrap'
    ])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl'
            })

            .when('/receipts', {
                templateUrl: 'views/receipts.html',
                controller: 'ReceiptsCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });
    });
