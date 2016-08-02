var $navbar_container = $("#navbar_container");
var $before_link = $("#navbar_container > .in_page_links > a:before");
var $links = $("#navbar_container > .in_page_links > a");
var $color_band = $("#color_band");
var $logo = $("#navbar_dubhacks_logo");

function eventListeners () {
	$navbar_container.hover(function(){
		$links.css("color", "black");
		$before_link.css("background-color", "black");
		// $color_band.css("opacity", "1");

		$logo.attr("src", "images/final_logo.png");
		console.log("helol");
	}, function(){
		$links.css("color", "white");
		$before_link.css("background-color", "white");

		$logo.attr("src", "images/dubhacks_logo_white.svg");
		// $color_band.css("opacity", "0");
	});
}

eventListeners();