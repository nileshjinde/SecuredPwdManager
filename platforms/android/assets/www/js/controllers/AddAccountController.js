mainApp.controller('AddAccountController',function($scope,$rootScope,$location){
	//alert("AddAccountController");

	//alert($location);
	$scope.currentPath = $location.path();
	$scope.navTitle = "Add Account";
	$scope.account = {};

	$scope.OnSubmitAddAccountForm = function(){
		//alert("On Add Account btn Clicked-- "+ $scope.account);
		
		var accountName = accountName;
		
		$rootScope.back();
	}
	
	$scope.showPwd = function() {
       // alert("checkbox checked  "+$scope.showpassword);
		var isCheckBoxChecked = $scope.showpassword;
		if(isCheckBoxChecked){
			$('#pwd').attr('type', 'text');
			$('#pwd').attr('readonly', true);
		}else{
			$('#pwd').attr('type', 'password');
			$('#pwd').attr('readonly', false);
		}
      };

});