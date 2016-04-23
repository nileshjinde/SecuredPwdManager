mainApp.controller('AccountListController',function($scope,$location,config){
	//alert("AccountListController");

	//alert($location);
	$scope.currentPath = $location.path();
	
	$scope.navTitle = "Account List";
	
	var accountData = JSON.parse(localStorage.getItem(config.accountDataKey));
	
	// No data exists, first account adding
	if(accountData == undefined || accountData== null){
		accountData = [];
	}
	$scope.accountList= accountData;
	
	$scope.onAcountClick = function(index){
		if(accountData.length>0 && index < accountData.length){
			localStorage.setItem("SELECTED_ACCOUNT",JSON.stringify(accountData[index]));
			//alert("onAcountClick "+index);
			$location.path('/accountDetail');
		}
	};
	
	/*$scope.accountList = {
			"accountData":[
			               {"accountName": "Facebook",
			            	   "userId": "fb@fg.com",
			            	   "pwd": "1233345"
			               },
			               {"accountName": "Gmail",
			            	   "userId": "gmail@fg.com",
			            	   "pwd": "567575"
			               },
			               {"accountName": "Paytm",
			            	   "userId": "ptm@fg.com",
			            	   "pwd": "56864"
			               },
			               {"accountName": "yahoo",
			            	   "userId": "yahho@fg.com",
			            	   "pwd": "ffhf"
			               },
			               {"accountName": "amazon",
			            	   "userId": "amazon@fg.com",
			            	   "pwd": "bfhffh"
			               }
			               ]
	};*/


});