mainApp.controller('LoginController',function($scope,$location,config){
    
	$scope.OnSubmitLoginForm = function(path){
	//alert("Login Clicked-- "+path+ " "+config.appSecurePIN+" user entered :"+$scope.securePin);
		var userSecurePin= $scope.securePin;
		if(config.appSecurePIN !== userSecurePin){
			alert("PIN not matched!");
		}else{
			 $location.path( path );	
		}
	}
});