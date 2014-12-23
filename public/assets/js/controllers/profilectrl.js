angular.module("appProfile", ['ngSanitize', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', "com.2fdevs.videogular.plugins.overlayplay", "com.2fdevs.videogular.plugins.poster"])
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
			{src: $sce.trustAsResourceUrl("https://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"), type: "audio/mpeg"},
			{src: $sce.trustAsResourceUrl("https://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"), type: "audio/ogg"}
		];
		$scope.config = {
			theme: {
				url: "assets/css/videogular/themes/default/videogular.css"
			}
		};
	}])
	// Video Player
	.controller("videoCtrl", ['$scope', '$sce', function ($scope, $sce) {
		$scope.config = {
			sources: [
				{src: $sce.trustAsResourceUrl("https://www.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
				{src: $sce.trustAsResourceUrl("https://www.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
				{src: $sce.trustAsResourceUrl("https://www.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
			],
			tracks: [
				{
					src: "pale-blue-dot.vtt",
					kind: "subtitles",
					srclang: "en",
					label: "English",
					default: ""
				}
			],
			theme: {
				url: "assets/css/videogular/themes/default/videogular.css"
			},
			plugins: {
				poster: "images/videogular/videogular-poster.png"
			}
		};
	}])
	.directive("myLogoPlugin",
		["VG_STATES", function(VG_STATES) {
			return {
				restrict: "E",
				require: "^videogular",
				template: "<img src='images/videogular/videogular-logo.png' ng-show='showLogo'>",
				link: function(scope, elem, attrs, API) {
					scope.showLogo = true;

					scope.$watch(
						function() {
							return API.currentState;
						},
						function(newVal, oldVal) {
							if (newVal != oldVal) {
								scope.showLogo = (newVal != VG_STATES.PLAY);
							}
						}
					)
				}
			}
		}
	]);