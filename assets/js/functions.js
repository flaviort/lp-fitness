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

	// FANCYBOX
	$('[data-fancybox]').fancybox({
		toolbar : true,
		smallBtn : false,
		arrows: true,
		autoFocus: false,
		touch: false,
		buttons : [
			'close'
		],
		animationEffect : "zoom-in-out",
		transitionEffect : "circular",
	}); // END FANCYBOX

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

});

var $form = $('#mc-embedded-subscribe-form');

if ($form.length > 0) {
	$('#mc-embedded-subscribe').bind('click', function (event) {
		if (event) {
			if($('#mce-NAME').val().length === 0 ) {
				$('#mce-NAME').focus();
			} else if($('#mce-EMAIL').val().length === 0 ) {
				$('#mce-EMAIL').focus();
			} else if($('#mce-MESSAGE').val().length === 0 ) {
				$('#mce-MESSAGE').focus();
			} else {
				register($form);
			}
		}
	})
};

function register($form) {
	$('#mc-embedded-subscribe-form').val('Sending...');
	$.ajax({
		type: $form.attr('method'),
		url: $form.attr('action'),
		data: $form.serialize(),
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		error: function (resp, text) {
			console.log('mailchimp ajax submit error: ' + text);
		},
		success: function (t) {
			$('#mc-embedded-subscribe-form').val('SUBMIT')
			if (t.result === 'success') {
				console.log(t.msg);
				$("#subscribe-result p").html(t.msg);
				$("#mce-NAME").val("");
				$("#mce-EMAIL").val("");
				$("#mce-PHONE").val("");
				$("#mce-MESSAGE").val("");
			} else {
				console.log(t.msg);
				$("#subscribe-result p").css("color", "#412963"), 0 != t.msg.substring(0, 1) ? 
				$("#subscribe-result p").html("E-mail already registered, thank you!") : 
				$("#subscribe-result p").html("Please insert a email!");
			}
		}
	});
};