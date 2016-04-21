var mainApp = angular.module('SecuredPwdManager',['ngRoute']);

// These are constants
mainApp.constant('config', {
    appSecurePIN: '0007'
});

// These are values , can be changed runtime
mainApp.value('userData', {
    firstName: ""
});


mainApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
	   templateUrl : 'views/Login.html',
        controller: 'LoginController'	   
	})
	
	.when('/accountList',{
	   templateUrl : 'views/AccountList.html',
        controller: 'AccountListController'	   
	})
});



