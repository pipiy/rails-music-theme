angular.module("appHome", ['ui.bootstrap'])
	.controller("carouselCtrl", ['$scope', function($scope){
		$scope.interval = 5000;
		$scope.slides = [
			{image: "assets/images/bg-1.jpg", title: "Example headline.", text: "Praesent magna nunc, tincidunt pretium conseq uatd apibus, mollis nec odio. Nunfeugiat moles tie orci, eu rutrum velit dignissim. Donec vel semper elit. Nunc dapibus tincidunt arcu, accon gue turpis semper vitae molestie orcifeugia."},
			{image: "assets/images/bg-2.jpg", title: "Another example headline.", text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."},
			{image: "assets/images/bg-2.jpg", title: "One more for good measure.", text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."}
		]
		$scope.addSlide = function(){
			$scope.slides.push({
				image: 		$scope.image,
				title: 		$scope.title,
				text: 		$scope.text
			});
		};
	}])
	.controller("postCtrl", ['$scope', function($scope){
		// Live posts
		$scope.posts = [{
			image: "assets/images/post-img/post-img-3.jpg",
			title: "Live Concert",
			text:  "Praesent magna nunc, tincidunt pretium conseq uatd apibus, mollis nec odio. Nunfeugiat moles tie orci, eu rutrum velit dignissim. Donec vel semper elit. Nunc dapibus tincidunt arcu, accon gue turpis semper vitae molestie orcifeugia.",
			musician: "Dj Boombastic",
			dates: [{
				day: 	 "28",
				month: "January",
				year:  "2014" 
			}],
			concert: "Live Concert" 
		}];
	}])
	.controller("blogPostCtrl", ['$scope', function($scope){
		// Blog  posts
		$scope.post_items = 
		[
			{
				title: 		"Music",
				subtitle: "Lorem ipsulum dolor sit amet",
				date: 		"06 Dec 2014",
				author: 	"by Getty Images",
				image: 		"assets/images/post-img/post-img-9.jpg",
				text: 		"Nunfeugiat moles tie orcieu rutrum velit dignissim. Donevsemper elit. Nunc dapibu tincidunt arcu, accon gue turpis semper vitae molestie orcifeugia ac congue turpi."
			},
			{
				title: 		"Blog",
				subtitle: "Lorem ipsulum dolor sit amet",
				date: 		"06 Dec 2014",
				author: 	"by Getty Images",
				image: 		"assets/images/post-img/post-img-4.jpg",
				text: 		"Nunfeugiat moles tie orcieu rutrum velit dignissim. Donevsemper elit. Nunc dapibu tincidunt arcu, accon gue turpis semper vitae molestie orcifeugia ac congue turpi."
			},
			{
				title: 		"Music",
				subtitle: "Lorem ipsulum dolor sit amet",
				date: 		"06 Dec 2014",
				author: 	"by Getty Images",
				image: 		"assets/images/post-img/post-img-10.jpg",
				text: 		"Nunfeugiat moles tie orcieu rutrum velit dignissim. Donevsemper elit. Nunc dapibu tincidunt arcu, accon gue turpis semper vitae molestie orcifeugia ac congue turpi."
			}
		]

		$scope.addPost = function(){
			$scope.post_items.push({
				title: 			$scope.title,
				subtitle: 	$scope.subtitle,
				date: 			$scope.date,
				author: 		$scope.author,
				image: 			$scope.image,
				text: 			$scope.text
			});
		};
	}])
	.controller("homeCtrl", ['$scope', '$modal', '$log', function($scope, $modal, $log){
		

		// Sign in modal window

		$scope.users = [];

	  $scope.open = function(size) {
	    var modalOpen = $modal.open({
	      templateUrl: "modalContent.html",
	      size: size,
	    });
	  };

	  $scope.addUser = function(){
	  	$scope.users.push({
	  		user: 		$scope.user_email,
	  		password: $scope.user_password
	  	})
	  	$scope.user_email = '';
	  	$scope.user_password = '';
	  	$log.info("User " + $scope.user_email + " logged in")
	  };
	}])

	.directive("gallery", function(){
		return {
			restrict: "E",
			controller: "carouselCtrl",
			templateUrl: "carousel.html"
		}
	})
	.directive("post", function(){
		return {
			restrict: "E",
			controller: "postCtrl",
			templateUrl: "post.html"
		}
	})
	.directive("blogpost", function(){
		return {
			restrict: "E",
			controller: "blogPostCtrl",
			templateUrl: "blog-post.html"
		}
	});