'use strict';

angular.module('socialApp')
    .controller('MainCtrl', ['$rootScope', '$scope', '$state', '$timeout', 'MainSvc', 'localStorageService', function($rootScope, $scope, $state, $timeout, MainSvc, localStorageService) {

        var getLocalStorage = localStorageService.get('posts');

        // get data from json file or local storage
        if (getLocalStorage == null || getLocalStorage.length == 0) {
            MainSvc.getPosts().then(function(response) {
                $scope.posts = response.data;
            });
        } else {
            $scope.posts = getLocalStorage;
        }

        // get comments
        // if($scope.post.comments.length) {
            $scope.commentText = 'Expand';
        // }
        $scope.toggleComments = function(item) {
            $scope.getComments = !$scope.getComments;
            if($scope.getComments) {
            $scope.commentText = 'Collapse';
            } else {
                $scope.commentText = 'Expand';
            }

        };
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
