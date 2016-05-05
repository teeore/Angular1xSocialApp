'use strict';

angular.module('socialApp')
    .factory('MainSvc', ['$http', function($http) {
    	return {
    		getPosts: function() {
    			return $http.get('/scripts/services/data/posts.json');
    			
    		}
    	};     
    }]);
