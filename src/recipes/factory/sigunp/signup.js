(function() {

  'use strict';

  function signupService($http)
  {
    
  		var service = {};

      service.confirm = function(data)
      { 

        var url = 'https://uvgd7nx77a.execute-api.us-east-1.amazonaws.com/beta/office-signup';

        var promise = $http.post(url,data).then(function(response)
        { 
          return response.data;
        });

        return promise;
        
      };

      service.signup = function(data)
      { 

        var url = 'https://uvgd7nx77a.execute-api.us-east-1.amazonaws.com/beta/office-signup';

        var promise = $http.post(url,data).then(function(response)
        { 
          return response.data;
        });

        return promise;

      };

    	return service;

  }

  angular.module('factory.signup', [])
  	.factory('signupService',signupService);

})();