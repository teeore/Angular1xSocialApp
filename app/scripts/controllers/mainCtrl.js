'use strict';

angular.module('socialApp')
    .controller('MainCtrl', ['$rootScope', '$scope', '$state', '$timeout', 'MainSvc', 'localStorageService', function($rootScope, $scope, $state, $timeout, MainSvc, localStorageService) {

        var getLocalStorage = localStorageService.get('posts');

        // get data from json file or local storage
        if (getLocalStorage == null || getLocalStorage.length == 0) {
            MainSvc.getPosts().then(function(response) {
                $scope.posts = response.data;
                console.log($scope.posts);
            });
        } else {
            $scope.posts = getLocalStorage;
        }
    }])
    .filter('photoFilter', function() {
        return function(item, type) {
            var out = [];
            angular.forEach(item, function(type) {
                if (type.media === 'photo') {
                    out.push(type)
                }
            })
            return out;
        }
    })
    .filter('videoFilter', function() {
        return function(item, type) {
            var out = [];
            angular.forEach(item, function(type) {
                if (type.media === 'video') {
                    out.push(type)
                }
            })
            return out;
        }
    });
