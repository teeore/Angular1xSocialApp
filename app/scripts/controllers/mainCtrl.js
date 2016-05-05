'use strict';

angular.module('socialApp')
    .controller('MainCtrl', ['$rootScope', '$scope', '$timeout', 'MainSvc', 'localStorageService', function($rootScope, $scope, $timeout, MainSvc, localStorageService) {
        var getLocalStorage = localStorageService.get('posts');

        // get data from json file or local storage
        // if (getLocalStorage == null || getLocalStorage.length == 0) {
            MainSvc.getPosts().then(function(response) {
                $scope.posts = response.data;
                console.log($scope.posts)
            });
        // } 
        // else {
        //     $scope.posts = getLocalStorage;
        // }




        // save new student to local storage
        // $scope.save = function() {
        //     $scope.addRow = false;
        //     $scope.displaySave = false;
        //     if ($scope.item) {
        //         $scope.studentInfo.push($scope.item);
        //         $scope.item.id = $scope.getUniqueId(100, 999);
        //         localStorageService.set('students', $scope.studentInfo);
        //     }
        //     $scope.item = '';
        //     addContainer.removeClass('slideDown').addClass('slideUp');
        // };

 
    }]);

