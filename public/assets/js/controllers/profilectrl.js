angular.module("appProfile", ['ngSanitize', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', "com.2fdevs.videogular.plugins.overlayplay", "com.2fdevs.videogular.plugins.poster"])
	.controller("editProfileCtrl", ['$scope', function($scope){
		$scope.showDiv = false;
		$scope.alertBox = false;
		$scope.successBox = false;
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
		$scope.social_placeholder = "http://www.example.com";
		$scope.fb_button = "Facebook";
		$scope.gl_button = "Google+";
		$scope.tw_button = "Twitter";
		$scope.pin_button = "Pinterest";

		$scope.addFacebook = function(){
			$scope.social_facebook = "https://facebook.com"
			$scope.social_links.push({social_name: $scope.social_facebook});
		};
		$scope.addGoogle = function(){
			$scope.social_google = "https://plus.google.com"
			$scope.social_links.push({social_name: $scope.social_google})	
		};
		$scope.addTwitter = function(){
			$scope.social_twitter = "https://twitter.com"
			$scope.social_links.push({social_name: $scope.social_twitter})	
		};
		$scope.addPinterest= function(){
			$scope.social_pinterest = "https://pinterest.com"
			$scope.social_links.push({social_name: $scope.social_pinterest})	
		};
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
	}])
	// Video Player
	.controller("videoCtrl", ['$scope', '$sce', function ($scope, $sce) {
		$scope.config = {
			sources: [
				{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
				{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
				{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
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
	])

	.directive("edituser", function(){
		return {
			restrict: "E",
			controller: "editProfileCtrl",
			templateUrl: "settings.html"
		}
	})

	.directive('ellipsisAnimated', function () { 
    return {
      restrict: "E",
      template:
          "<span class='ellipsis_animated-inner'>" +
              "<span>.</span>" +
              "<span>.</span>" +
              "<span>.</span>" +
          "</span>"
    };
	});
