var newApp = angular.module('newApp', ['ngRoute', 'ngAnimate']);

newApp.config(function($routeProvider) {
        $routeProvider
	.when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController',
		title: 'My MVA Dashboard'
        })
	.when('/login', {
		templateUrl: 'pages/login.html',
		controller: 'loginController',
		title: 'Login'
	})
	.when('/profile', {
		templateUrl: 'pages/profile.html',
		controller: 'profileController',
		title: 'Profile'
	})
	.when('/asset', {
		templateUrl: 'pages/asset.html',
		controller: 'assetController',
		title: 'Asset'
	})
	.otherwise({redirectTo: '/'});
});

newApp.run(['$rootScope', function($rootScope){
	$rootScope.changeTitle=function(name, bicon, action){
		$rootScope.title = {
							name: name,
							bicon: bicon,
							action: action,
							test: "test",
							};
	}
}]);


newApp.controller('mainController', function($scope){
	var title = "My MVA Dashboard";
	var bicon = "fas fa-bars";
	var action = "openSideNav";
    $scope.message = 'This is the dashboard/home view';
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('loginController', function($scope){
	var title = "Login";
	var bicon = "fas fa-chevron-left";
	var action = "goBack";
	$scope.message = "This is the login view";
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('profileController', function($scope){
	var title = "Profile";
	var bicon = "fas fa-chevron-left";
	var action = "openSideNav";
	$scope.message = "This is the profile view";
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});
newApp.controller('assetController', function($scope){
	var title = "My MVA Dashboard";
	var bicon = "fas fa-chevron-left";
	var action = "openSideNav";
	$scope.message = "This is the Asset view";
	$scope.title = title;
	$scope.bicon = bicon;
	$scope.action = action;
	$scope.changeTitle(title, bicon, action);
});