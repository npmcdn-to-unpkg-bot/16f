"use strict";(function(){	window.onload = function() {		if ($(window).width() <= 700) {			makeCarouselImagesSmall();		}	}	window.onresize = function() {		if ($(window).width() <= 700) {			makeCarouselImagesSmall();		} else {			makeCarouselImagesBig();		}	}	function makeCarouselImagesSmall () {		console.log("ghahhahahhaha");		for (var i = 1; i <= 6; i++) {			if (i == 1) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/health_panel_mobile.png");			} else if (i == 2) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/social_justice_panel_mobile.png");			} else if (i == 3) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/diversity_panel_mobile.png");			} else if (i == 4) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/accessibility_panel_mobile.png");			} else if (i == 5) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/environment_panel_mobile.png");			} else if (i == 6) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/education_panel_mobile.png");			}		}		$(".carousel-cell > h2").css("visibility", "hidden");	}	function makeCarouselImagesBig () {		console.log("ghahhahahhaha");		for (var i = 1; i <= 6; i++) {			if (i == 1) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/health_panel.png");			} else if (i == 2) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/social_justice_panel.png");			} else if (i == 3) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/diversity_panel.png");			} else if (i == 4) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/accessibility_panel.png");			} else if (i == 5) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/environment_panel.png");			} else if (i == 6) {				$(".slick-track > .panel-" + i + " > img").attr("src", "images/panels/education_panel.png");			}		}		$(".carousel-cell > h2").css("visibility", "visible");	}	// A helper method to create a new element and append it to the DOM faster.	function createNewElement (elementType, elementClass, elementID, innerHTML) {		var newElement = document.createElement(elementType);		newElement.className = elementClass;		newElement.id = elementID;		newElement.innerHTML = innerHTML;		//document.querySelector(appendTag).appendChild(newElement);		return newElement;	}})();