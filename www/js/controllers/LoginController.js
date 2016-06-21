mainApp.controller('LoginController',function($scope,$location,config){
    
	$scope.OnSubmitLoginForm = function(path){
	//alert("Login Clicked-- "+path+ " "+config.appSecurePIN+" user entered :"+$scope.securePin);
		var userEnteredPin= $scope.securePin;
		var userSecurePin = localStorage.getItem("LOGIN_HANDLE");
		
		if(userEnteredPin !== userSecurePin){
			alert("PIN not matched!");
		}else{
			 //$location.path( path );
			$location.path(path).replace();
		}
	}
	
	$scope.OnRegisterBtnClicked = function($event,path){
		//alert("Register btn Clicked-- "+path);
		$location.path(path);

		$event.preventDefault();
	}
	
});