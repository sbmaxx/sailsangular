angular.module('app', []);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});

angular
    .module("app")
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!#');

        $routeProvider
            .when('/test', {
                templateUrl: 'test/index.html',
                controller: TestController
            })
            .when('/', {
                templateUrl: 'developers/index.html',
                controller: TestController
            })
            .otherwise({ redirectTo: '/' });

    });
