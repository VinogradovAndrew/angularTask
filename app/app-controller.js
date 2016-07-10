var app = angular.module('simpleApp', ['ui.router'])

    .controller('MainController', function($scope) {

        //$scope.$routeParams = $routeParams;
        debugger;
    })
    .controller('LoginController', function($scope) {
        $scope.name = "LoginController";

        $scope.master = {};

        $scope.login = function(user){
            debugger;
            $scope.master = angular.copy(user);

            return false;

        };
        debugger;
    })

    .controller('CoursesListController', function($scope) {
        $scope.name = "CoursesListController";
        //$scope.params = $routeParams;
    })
    .controller('CourseController', function($scope) {
        $scope.name = "CourseController";
        debugger;
        //$scope.params = $routeParams;
    })
    .component('greetUser', {
        template: 'Hello, {{$ctrl.user}}!',
        controller: function GreetUserController() {
            this.user = 'world';
        }
    })
    .config( function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'view-login/view-login.tpl.html',
                controller:'LoginController'
            })

            .state('courses',{
                url: '/courses',
                controller:'CoursesListController',
                templateUrl:'view-videos-list/view-videos-list.tpl.html'
            })
            .state('courses.edit',{
                url:'/edit/{courseId:[0-9]{1,4}}',
                templateUrl:'view-videos-list/view-video/view-video.tpl.html',
                controller:'MainController'
            });
    });




    /*.config(function($routeProvider, $locationProvider) {
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
    });*/