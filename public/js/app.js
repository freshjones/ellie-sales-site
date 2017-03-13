(function() {

	'use strict';

	angular.module("app", [ 
		'angular-jwt', 
		'ui.router',
		'templates',
		'factory.cognito',
		'ngMessages',
		'ngPassword'
	])
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) 
	{

		$urlRouterProvider.otherwise("/");

		$stateProvider

			.state({

				name:'root',
				url:'/',
				abstract:true,
				views:
				{
					'':{
						templateUrl:'templates/main.tpl.html'
					},
					'branding@root' : {
						templateUrl:'templates/branding.tpl.html',
						controller:function($scope)
						{
							

						}
					},
					'navigation@root' : {
						templateUrl:'templates/nav.tpl.html',
						controller:function($scope)
						{
							

						}
					},
				}
				
			})

			.state({

				name:'home',
				parent:'root',
				url:'',
				views:{
					
					'main' : {
						templateUrl:'templates/login.tpl.html',
						controller:function($scope, cognito){

							$scope.save = function()
							{
								cognito.getHelloWorld().then(function(data){

									console.log(data);
								});
							};

						}
					},
				}
			})

			.state({

				name:'signup',
				parent:'root',
				url:'signup',
				views:{
					
					'main' : {
						templateUrl:'templates/signup.tpl.html',
						controller:function($scope, cognito){

							
							$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
							$scope.passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

							$scope.submitDisabled = false;

							$scope.attemptSignUp = function(data)
							{	
								cognito.signup(data).then(function(resp)
								{
									console.log(resp);
								});
							};

						}
					},
				}
			})

			.state({

				name:'confirm',
				parent:'root',
				url:'confirm-account',
				views:{
					
					'main' : {
						templateUrl:'templates/confirm.tpl.html',
						controller:function($scope, cognito){

							$scope.submitDisabled = false;

							$scope.onlyNumbers = /^[0-9]{6,6}$/;

							$scope.attemptConfirmation = function(code)
							{	
								cognito.confirm(code).then(function(resp)
								{
									console.log(resp);
								});
							};

						}
					},
				}
			});



	}]);
	


})();

(function() {

  'use strict';

  function cognito($http)
  {
    
  		var service = {};

    	service.getHelloWorld = function(lang, activity_path)
    	{ 

    		var url = '/auth/signup';

        var promise = $http.get(url).then(function(response)
        { 

         	return response.data;
        });

        return promise;

    	};

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

  angular.module('factory.cognito', [])
  	.factory('cognito',cognito);

})();