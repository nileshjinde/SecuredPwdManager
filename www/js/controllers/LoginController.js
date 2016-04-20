mainApp.controller('LoginController',function($scope,$location){
    
	$scope.OnLoginBtnClicked = function(path){
		alert("Login Clicked-- "+path);
		 $location.path( path );
	}
});