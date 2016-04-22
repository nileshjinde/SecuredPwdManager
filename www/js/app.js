var mainApp = angular.module('SecuredPwdManager',['ngRoute']);

// These are constants
mainApp.constant('config', {
    appSecurePIN: '0007'
});

// These are values , can be changed runtime
mainApp.value('userData', {
    firstName: ""
});

mainApp.run(function ($rootScope, $location) {

    var history = [];

    $rootScope.$on('$routeChangeSuccess', function() {
        history.push($location.$$path);
    });

    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

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
	
	.when('/addAccount',{
	   templateUrl : 'views/AddAccount.html',
        controller: 'AddAccountController'	   
	})
});



