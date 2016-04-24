mainApp.controller('AccountDetailController',function($scope,$rootScope,$location,config){
	//alert("AddAccountController");

	//alert($location);
	$scope.currentPath = $location.path();
	$scope.navTitle = "Account Detail";
	$scope.account = JSON.parse(localStorage.getItem("SELECTED_ACCOUNT"));

	$scope.showPwd = function() {
       // alert("checkbox checked  "+$scope.showpassword);
		var isCheckBoxChecked = $scope.showpassword;
		if(isCheckBoxChecked){
			$('#pwd').attr('type', 'text');
		}else{
			$('#pwd').attr('type', 'password');
		}
      };
      
      $scope.getDecryptedPwd = function(encPwd){
    	  var decryptedPwd = CryptoJS.AES.decrypt(encPwd, config.encKey).toString(CryptoJS.enc.Utf8);
    	  console.log(encPwd + " "+decryptedPwd);
    	  return decryptedPwd;
      };

});