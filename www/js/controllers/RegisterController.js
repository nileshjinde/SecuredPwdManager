mainApp.controller('RegisterController',function($scope,$location,config){
    
	$scope.OnSubmitRegisterForm = function(path){
		//alert("Register Clicked-- ");
		
		var userSecurePin= $scope.securePin;
		var reEnterSecurePin= $scope.reSecurePin;
		
		if(reEnterSecurePin !== userSecurePin){
			alert("PIN and Re-Enter PIN not matched!");
		}else{
			localStorage.setItem("LOGIN_HANDLE",userSecurePin);
			$location.path(path).replace();
		}
	}
	
});