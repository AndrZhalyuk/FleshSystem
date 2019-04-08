$(document).ready(function() {
	$('select').niceSelect();
	$('.toogle-mobile-menu').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('menu-opened');
	});
	$('.main-slider').slick({
		slidesToScroll: 1,
		arrows:false,
		dots: true,
		autoplay: true,
		autoplaySpeed:4000,
		pauseOnHover:false,
		pauseOnFocus:false,
		customPaging : function(slider, i) {
			var slide_title = $(slider.$slides[i]).find('.main-slider-item').data('slide-name');
			var slide_dot = '<div class="slide_dot"><div class="indicator"></div></div>';
			return slide_dot;
		}
	});	
});
