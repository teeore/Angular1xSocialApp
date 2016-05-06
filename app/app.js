'use strict';


var socialApp = angular.module('socialApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.router',
        'angularModalService',
        'LocalStorageModule'
    ])


    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/posts/all');
      
        $stateProvider
            .state('main', {
                url: '',
                templateUrl: 'views/main.html',
                abstract: true,
                controller: 'MainCtrl'

            })

            // .state('main.details', {
            //     url: '',
            //     templateUrl: 'views/main.html',
            //     views: {
            //         // 'posts': {
            //         //     templateUrl: 'views/post.html'
            //         // },
            //         'postmodal': {
            //             templateUrl: 'views/postModal.html'
            //         },
            //         'comments': {
            //             templateUrl: 'views/comments.html'
            //         },
            //         'newmodal': {
            //             templateUrl: 'views/newModal.html'
            //         },
            //         'newpost' :{
            //             templateUrl: 'views/newpost.html'
            //         }
            //     }
                
            // })

            .state('main.posts', {
                url: '/posts',
                template: '<ui-view />',
                abstract: true
            })

            .state('main.posts.all', {
                url: '/all',
                templateUrl: 'views/posts.html'
            })

            .state('main.posts.photos', {
                url: '/photos',
                templateUrl: 'views/photos.html'
            })

            .state('main.posts.videos', {
                url: '/videos',
                templateUrl: 'views/videos.html'
            })

            .state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html',
            })

            // $locationProvider.html5Mode(true);

    })

