(function() {

	'use strict';

	angular.module("app", [ 
		'angular-jwt', 
		'ui.router',
		'templates',
		'factory.signup',
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
						controller:function($scope, signupService){

							$scope.save = function()
							{
								signupService.getHelloWorld().then(function(data){

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
						controller:function($scope, signupService){

							
							$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
							$scope.passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

							$scope.submitDisabled = false;

							$scope.attemptSignUp = function(data)
							{	
								signupService.signup(data).then(function(resp)
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
						controller:function($scope, signupService){

							$scope.submitDisabled = false;

							$scope.onlyNumbers = /^[0-9]{6,6}$/;

							$scope.attemptConfirmation = function(code)
							{	
								signupService.confirm(code).then(function(resp)
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
(function() {

  'use strict';

  function UserService()
  {

    var Users = {};

    var userList = [
    {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
    },
    {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    },
    {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
    },
    {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
    }
    ];

    Users.all = function() {
      return userList;
  };

  Users.findById = function(id) {
      // Returning a single user object as our test expects it to
      return userList.find(function(user) {
        return user.id === id;
    });
  };
  
  return Users;

}

angular.module('api.users', [])
.factory('UserService',UserService);

})();
describe('Users factory', function() 
{

	var Users;

	var userList = [
	{
		id: '1',
		name: 'Jane',
		role: 'Designer',
		location: 'New York',
		twitter: 'gijane'
	},
	{
		id: '2',
		name: 'Bob',
		role: 'Developer',
		location: 'New York',
		twitter: 'billybob'
	},
	{
		id: '3',
		name: 'Jim',
		role: 'Developer',
		location: 'Chicago',
		twitter: 'jimbo'
	},
	{
		id: '4',
		name: 'Bill',
		role: 'Designer',
		location: 'LA',
		twitter: 'dabill'
	}
	];

	var singleUser = {
		id: '2',
		name: 'Bob',
		role: 'Developer',
		location: 'New York',
		twitter: 'billybob'
	};

	// Before each test load our api.users module
	beforeEach(angular.mock.module('api.users'));

	// Before each test set our injected Users factory (_Users_) to our local Users variable
	beforeEach(inject(function(_UserService_) {
		Users = _UserService_;
	}));

	// A simple test to verify the Users factory exists
	it('should exist', function() {
		expect(Users).toBeDefined();
	});

	// A set of tests for our Users.all() method
	describe('.all()', function() {

    	// A simple test to verify the method all exists
    	it('should exist', function() {
    		expect(Users.all).toBeDefined();
    	});

    	it('should return a hard-coded list of users', function() {
    		expect(Users.all()).toEqual(userList);
    	});

    });

	describe('.findById()', function() {

  	  // A simple test to verify the method findById exists
  	  it('should exist', function() {
  	  	expect(Users.findById).toBeDefined();
  	  });

  	  it('should return one user object if it exists', function() {
  	  	expect(Users.findById('2')).toEqual(singleUser);
  	  });

  	  it('should return undefined if the user cannot be found', function() {
  	  	expect(Users.findById('ABC')).not.toBeDefined();
  	  });

  	});


});