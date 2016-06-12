"use strict";

(function(){
	window.onload = function() {
		//centerScreen();
		generateBackground();
	}

	window.onresize = function() {
		//centerScreen();
	}

	function centerScreen() {
		var content_height = parseInt($("#SplashSection").css("height"));
		var padding = ($(window).height() - content_height) / 2;

		$("#SplashSection").css("padding-top", padding + "px");
		$("#SplashSection").css("padding-bottom", padding + "px");
	}

	function generateBackground () {
		// creating stars
		for (var i = 0; i < 200; i++) {
			// create star
			var currStar = document.createElement("img");
			currStar.className = "back stars";
			currStar.src = "images/star.svg";
			// set a random size
			var randomSize = Math.random() * 5;
			//console.log(randomSize);
			currStar.style.width = randomSize + "px";
			// set random position
			var randomTop = Math.random() * 100;
			currStar.style.top = randomTop + "vh";
			var randomLeft = Math.random() * 100;
			currStar.style.left = randomLeft + "vw";

			document.getElementById("SplashSection").appendChild(currStar);
		}

		// create moon
		var moon = createNewElement("img", "back", "moon", "");
		moon.src = "images/moon.svg";
		document.getElementById("SplashSection").appendChild(moon);

		// create clouds
		for (var j = 5; j >= 1; j--) {
			//if (j > 2) {
				var currCloud = createNewElement("img", "cloud back", "", "");
				currCloud.src = "images/cloud_" + j + ".svg";
				document.getElementById("SplashSection").appendChild(currCloud);

				// if (j == 5) {
				// 	currCloud.style.bottom = "-250px";
				// 	currCloud.style.left = "-200px";
				// } else if (j == 4) {
				// 	currCloud.style.bottom = "-225px";
				// }
			//}
			
		}

		// creating pink dubhacks logo
		var logo = createNewElement("img", "back", "pink_logo", "");
		logo.src = "images/dubhacks_logo_pink.svg";
		document.getElementById("SplashSection").appendChild(logo);

		
		// creating fb logo
		var fb = createNewElement("i", "fa fa-facebook-official fa-3x", "fb", "");
		var fb_link = document.createElement("a");
		fb_link.href = "https://www.facebook.com/uwhacks/?fref=ts";
		//twitter_link.target = "_blank";
		$(fb_link).attr({
			"aria-hidden": 'true',
			"target": "_blank"
		});
		fb_link.appendChild(fb);
		document.getElementById("links").appendChild(fb_link);

		// creating twitter logo
		var twitter = createNewElement("i", "fa fa-twitter fa-3x", "twitter", "");
		var twitter_link = document.createElement("a");
		twitter_link.href = "https://twitter.com/DubHacks?lang=en";
		$(twitter_link).attr({
			"aria-hidden": 'true',
			"target": "_blank"
		});
		twitter_link.appendChild(twitter);
		document.getElementById("links").appendChild(twitter_link);

		// creating email logo
		var envelope = createNewElement("i", "fa fa-envelope fa-3x", "envelope", "");
		var envelope_link = document.createElement("a");
		// Need to set email link
		envelope_link.href = "https://twitter.com/DubHacks?lang=en";
		$(envelope_link).attr({
			"aria-hidden": 'true',
			"target": "_blank"
		});
		envelope_link.appendChild(envelope);
		document.getElementById("links").appendChild(envelope_link);
		

	}

	// A helper method to create a new element and append it to the DOM faster.
	function createNewElement (elementType, elementClass, elementID, innerHTML) {
		var newElement = document.createElement(elementType);
		newElement.className = elementClass;
		newElement.id = elementID;
		newElement.innerHTML = innerHTML;
		//document.querySelector(appendTag).appendChild(newElement);
		return newElement;
	}

})();