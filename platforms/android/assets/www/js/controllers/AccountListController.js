mainApp.controller('AccountListController',function($scope,$location){
	//alert("AccountListController");

	//alert($location);
	$scope.currentPath = $location.path();
	
	$scope.navTitle = "Account List";

	$scope.accountList = {
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
	};


});