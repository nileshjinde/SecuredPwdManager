var mainApp = angular.module('SecuredPwdManager',['ngRoute']);

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



