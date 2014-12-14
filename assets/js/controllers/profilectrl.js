angular.module("appProfile", [])
	.controller("profileCtrl", ['$scope', function($scope){
		// Tab form
		$scope.tab = 1;

		$scope.selectTab = function(setTab){
			$scope.tab = setTab;
		}

		$scope.isSelected = function(isSet){
			return $scope.tab === isSet;
		}

		// Edit user form
		$scope.edit_users = [];

		$scope.edit_user = function(){
			$scope.edit_users.push({
				first_name: 		$scope.first_name,
				last_name: 			$scope.last_name,
				email: 					$scope.email,
				twitt: 					$scope.twitt
			});
			$scope.first_name = '';
			$scope.last_name = '';
			$scope.email = '';
			$scope.twitt = '';
		};
	}]);