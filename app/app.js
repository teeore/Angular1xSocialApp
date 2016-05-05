'use strict';


var studiocdnWebApp = angular.module('socialApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ui.router',
        'angularModalService',
        'LocalStorageModule'
    ])


    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.when('', '/main');
        $urlRouterProvider.otherwise('/main');
      
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                abstract: true
            })

            .state('main.details', {
                url: '',
                templateUrl: 'views/main.html',
                views: {
                    'posts@main': {
                        url: '',
                        templateUrl: 'views/post.html'
                    },
                    'postmodal': {
                        templateUrl: 'views/postModal.html'
                    },
                    'comments': {
                        templateUrl: 'views/comments.html'
                    },
                    'newmodal': {
                        templateUrl: 'views/newModal.html'
                    },
                    'newpost@main' :{
                        templateUrl: 'views/newpost.html'
                    }
                }
                
            })

            .state('photos', {
                url: '/photos',
                templateUrl: 'views/photos.html'
            })

            .state('videos', {
                url: '/videos',
                templateUrl: 'views/videos.html'
            })

            .state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html',
            })

            $locationProvider.html5Mode(true);

    })
     .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

