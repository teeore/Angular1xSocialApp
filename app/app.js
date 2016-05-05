'use strict';


var studiocdnWebApp = angular.module('socialApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'angularModalService'
    ])


    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/');
      
        $stateProvider
            .state('posts', {
                url: '',
                abstract: true,
                templateUrl: 'views/post.html'
            })

            .state('post.comments', {
                url: '',
                templateUrl: 'views/comments.html',
             })

            .state('post.modal', {
                url: '',
                templateUrl: 'views/postModal.html',
                controller: 'PackageDetailCtrl'
            })

             .state('post.new', {
                url: '',
                templateUrl: 'views/newModal.html',
                controller: 'PackageDetailCtrl'
            })

            .state('photos', {
                url: '',
                abstract: true,
                templateUrl: 'views/photos.html'
            })

            .state('videos', {
                url: '',
                abstract: true,
                templateUrl: 'views/videos.html'
            })
            
            .state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html',
            })

    });
