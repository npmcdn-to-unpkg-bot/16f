// Init selectors. This is done so jquery doesn't have to keep
// selecting the same tags repeatedly
var $navbar_container = $("#navbar_container");
var $before_link = $("#navbar_container > .in_page_links > a:before");
var $links = $("#navbar_container > .in_page_links > a");
var $color_band = $("#color_band");
var $logo = $("#navbar_dubhacks_logo");
var $header_container = $("#header_container");

var $fb = $("#fb > a > img");
var $twitter = $("#twitter > a > img");
var $mail = $("#mail > a > img");
var mobileScrollBack = false;
var isHoveringOver = false;


// Makes navbar background appear and changes color of links.
$navbar_container.hover(function(){
	isHoveringOver = true;

	$links.css("color", "#2F2F2F");
	$before_link.css("background-color", "#2F2F2F");
	// $color_band.css("opacity", "1");

	$logo.attr("src", "/images/final_logo.png");


	colorLogosPink();


}, function(){
	isHoveringOver = false;

	$links.css("color", "white");
	$before_link.css("background-color", "white");

	$logo.attr("src", "/images/dubhacks_logo_white.svg");
	// $color_band.css("opacity", "0");
	colorLogosWhite();
});

// Changes color of social media links after it scrolls past
// header seaction.
$(document).scroll(function() {
	var size = $(window).width();
	if (size < 768) {
		if (!$(document).scrollTop() > $header_container.offset().top) {
			$navbar_container.css("display", "flex");
		} else {
			$navbar_container.css("display", "none");
		}
	} else if (!isHoveringOver && $(document).scrollTop() > $header_container.outerHeight()) {
		colorLogosWhite();
	} else {
		colorLogosWhite();
	}
});

// Changes color of social media links to pink.
function colorLogosPink () {
	$fb.attr("src", "/images/facebook_pink.png");
	$twitter.attr("src", "/images/twitter_pink.png");
	$mail.attr("src", "/images/email_pink.png");
}

// Changes color of social media links to white.
function colorLogosWhite () {
	$fb.attr("src", "/images/facebook_white.png");
	$twitter.attr("src", "/images/twitter_white.png");
	$mail.attr("src", "/images/email_white.png");
}
