var app = angular.module('simpleApp', ['ngRoute'])

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$routeParams = $routeParams;

    })
    .controller('LoginController', function($scope,$routeParams) {
        $scope.name = "LoginController";
    })

    .controller('CoursesListController', function($scope, $routeParams) {
        $scope.name = "CoursesListController";
        $scope.params = $routeParams;
    })
    .controller('CourseController', function($scope, $routeParams) {
        $scope.name = "CourseController";
        $scope.params = $routeParams;
    })
    .component('greetUser', {
        template: 'Hello, {{$ctrl.user}}!',
        controller: function GreetUserController() {
            this.user = 'world';
        }
    })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'view-login/view-login.tpl.html',
                controller:'LoginController',
                resolve: {}
            })
            .when('/login', {
                templateUrl: 'view-login/view-login.tpl.html',
                controller: 'LoginController'
            })
            .when('/courses', {
                templateUrl: 'view-videos-list/view-videos-list.tpl.html',
                controller: 'CoursesListController'
            })
            .when('/courses/:mode/:courseId', {
               templateUrl: 'view-videos-list/view-video/view-video.tpl.html',
               controller: 'CourseController'
        });
    });