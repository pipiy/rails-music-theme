angular.module("appProfile", ['ngSanitize', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls'])
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
		$scope.first_name = "John";
		$scope.last_name = "Doe";
		$scope.email = "johndoe@example.com";

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

		//Social links
		$scope.social_links = [];
		$scope.social_placeholder = "http://www.example.com"

		$scope.addSocial = function(){
			if($scope.social_links.length < 4){
				$scope.social_links.push({
					social_name: 	$scope.social_name
				});
			}
		}
		$scope.removeLink = function(index){
			$scope.social_links.splice(index, 1)
		}
	}])
	// Audio Player
	.controller("audioCtrl", ['$scope', '$sce', function ($scope, $sce) {
		$scope.audio = [
			{src: $sce.trustAsResourceUrl("http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"), type: "audio/mpeg"},
			{src: $sce.trustAsResourceUrl("http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"), type: "audio/ogg"}
		];
		$scope.config = {
			theme: {
				url: "assets/css/videogular/themes/default/videogular.css"
			}
		};
	}]);
