angular.module("appSignUp", [])
	.controller("signupCtrl", ['$scope', function($scope){
		$scope.users = [];
		$scope.new_user = function(){
			if($scope.password === $scope.confirm_password) {
				$scope.users.push({
					first_name: 				$scope.first_name,
					last_name: 					$scope.last_name,
					email: 							$scope.email,
					password: 					$scope.password,
					confirm_password: 	$scope.confirm_password
				});
				$scope.first_name = '';
				$scope.last_name = '';
				$scope.email = '';
				$scope.password = '';
				$scope.confirm_password = '';
			}
		};
	}]);