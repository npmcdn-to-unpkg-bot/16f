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
		for (var i = 0; i < 200; i++) {
			// create star
			var currStar = document.createElement("img");
			currStar.className = "back stars";
			currStar.src = "images/star.svg";
			// set a random size
			var randomSize = Math.random() * 5;
			console.log(randomSize);
			currStar.style.width = randomSize + "px";
			// set random position
			var randomTop = Math.random() * 100;
			currStar.style.top = randomTop + "vh";
			var randomLeft = Math.random() * 100;
			currStar.style.left = randomLeft + "vw";

			document.getElementById("SplashSection").appendChild(currStar);
		}

		// create star
		var moon = document.createElement("img");
		moon.className = "back";
		moon.id = "moon";
		moon.src = "images/moon.svg";
		document.getElementById("SplashSection").appendChild(moon);
	}
})();