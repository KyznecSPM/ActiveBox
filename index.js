$(function() {

	// fixed header
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $('#nav');

	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	};

	checkScroll(scrollPos, introH);

	$(window).on('scroll load resize', function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});

	// Smooth scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		let elID = $(this).data('scroll');
		let elementOffset = $(elID).offset().top;

		nav.removeClass('show')

		$("html, body").animate({
			scrollTop: elementOffset-60
		}, 800)
	});


	// navToggle


	$('#navToggle').on('click', function(event){
		event.preventDefault();

		nav.toggleClass('show');
	})

	// reviews https://kenwheeler.github.io/slick/
	let slider = $('#reviewsSlider');

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade:true,
	  arrows: false,
	  dots: true
	});
})