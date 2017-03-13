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