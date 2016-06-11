"use strict";

(function(){
	window.onload = function() {
		centerScreen();
		generateStars();
	}

	window.onresize = function() {
		centerScreen();
	}

	function centerScreen() {
		var content_height = parseInt($("#SplashSection").css("height"));
		var padding = ($(window).height() - content_height) / 2;

		$("#SplashSection").css("padding-top", padding + "px");
		$("#SplashSection").css("padding-bottom", padding + "px");
	}

	function generateStars () {
		for (var i = 0; i < 100; i++) {
			// create star
			var currStar = document.createElement("img");
			currStar.className = "back stars";
			currStar.src = "images/star.svg";
			// set a random size
			var randomSize = Math.random() * 20;
			print(randomSize);
			currStar.width = randomSize + "px";
			// set random position
			var randomTop = Math.random() * $(window).height();
			currStar.top = randomTop + "px";
			var randomLeft = Math.random() * $(window).width();
			currStar.left = randomLeft + "px";

			document.getElementById("SplashSection").appendChild(currStar);
		}
	}
})();