$(document).ready(function() {

	// SMOOTH SCROLL
	$(".sliding-link").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});

	// REPLACE ALL SVG IMAGES WITH INLINE SVG
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			var $svg = jQuery(data).find('svg');
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
		}, 'xml');
	});

	// RENDER AGAIN SVGS THAT WERE INSERTED AFTER THE PAGE LOADED
	setTimeout(function(){
		jQuery('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				var $svg = jQuery(data).find('svg');
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
				$svg = $svg.removeAttr('xmlns:a');
				$img.replaceWith($svg);
			}, 'xml');
		});
	}, 200);

	$('label').click(function(e){
   		e.stopImmediatePropagation();
	});

	// OPEN FS MENU
	$("#top-menu #open-fs, #floating-fs").click(function(){
		$("body").addClass('no-scroll');
		openMenu.play();
	});

	// CLOSE FS MENU
	$("#fs-menu .menu li a, #fs-menu .close").click(function(){
		$("body").removeClass('no-scroll');
		openMenu.reverse();
	});

	// TIMELINE
	var openMenu = new TimelineMax({paused: true});

	// ELEMENTS
	var fsMenu = 		$("#fs-menu"),
		lines = 		$("#fs-menu .lines > div"),
		logo =			$("#fs-menu .logo"),
		closeBt =		$("#fs-menu .close"),
		menuLinks =		$("#fs-menu .menu li a"),
		socialLinks =	$("#fs-menu .social li a");

	openMenu
		.to(fsMenu, .5, {autoAlpha: 1}, 0)
		.staggerTo(lines, .5, {autoAlpha: 1, height: "100%"}, .1, "+=0")
		.staggerFrom(lines, .5, {width: 1}, .1, "+=0")
		.from(closeBt, .5, {rotation: -360, autoAlpha: 0, x: -50}, 1.7)
		.from(logo, .5, {autoAlpha: 0, x: -50}, 2)
		.staggerFrom(menuLinks, .5, {x: -50, autoAlpha: 0}, .1, "-=.7")
		.staggerFrom(socialLinks, .5, {x: -50, autoAlpha: 0}, .1, "-=.7")

	// REMOVE ELFSIGHT AD
	setTimeout(function(){ $('#instagram .eapps-link, #eapps-instagram-feed-1 > a').remove(); }, 300);
	setTimeout(function(){ $('#instagram .eapps-link, #eapps-instagram-feed-1 > a').remove(); }, 600);
	setTimeout(function(){ $('#instagram .eapps-link, #eapps-instagram-feed-1 > a').remove(); }, 1000);
	setTimeout(function(){ $('#instagram .eapps-link, #eapps-instagram-feed-1 > a').remove(); }, 2000);
	setTimeout(function(){ $('#instagram .eapps-link, #eapps-instagram-feed-1 > a').remove(); }, 3000);
	setTimeout(function(){ $('#instagram .eapps-link, #eapps-instagram-feed-1 > a').remove(); }, 5000);

	// FLOATING FS
	$(window).scroll(function() {
		if ($(document).scrollTop() > 500) {
			$('#floating-fs').addClass('visible');
		} else {
			$('#floating-fs').removeClass('visible');
		}
	});

	// WOW
	new WOW({
		live: true
	}).init();

	// RELLAX
	var rellax = new Rellax('.rellax', {
		center: true,
	});

	// FANCYBOX
	window.fancybox_settings = {
		toolbar : true,
		smallBtn : false,
		arrows: true,
		touch: false,
		autoFocus: false,
		buttons : [
			'close'
		],
		animationEffect : "zoom-in-out",
		transitionEffect : "circular"
	}; // END FANCYBOX

	$.extend($.fancybox.defaults, fancybox_settings);

});