mainApp.controller('AddAccountController',function($scope,$rootScope,$location,config){
	//alert("AddAccountController");

	//alert($location);
	$scope.currentPath = $location.path();
	$scope.navTitle = "Add Account";
	$scope.account = {};

	$scope.OnSubmitAddAccountForm = function(){
		//alert("On Add Account btn Clicked-- "+ $scope.account);
		
		var account = $scope.account;
		var password = CryptoJS.AES.encrypt(account.pwd, config.encKey).toString();
		account.pwd = password;
		
		/*var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase").toString();
		var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase").toString(CryptoJS.enc.Utf8);*/
		
		var accountData = JSON.parse(localStorage.getItem(config.accountDataKey));
		
		// No data exists, first account adding
		if(accountData == undefined || accountData== null){
			accountData = [];
		}
		accountData.push(account);
		localStorage.setItem(config.accountDataKey,JSON.stringify(accountData));
		
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