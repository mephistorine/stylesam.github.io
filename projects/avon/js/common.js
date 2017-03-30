$(document).ready(function(){

	$('.slick-slider').slick({
		autoplay : true,
		dots     : true,
		arrows   : false
	});

	$(document).foundation();
	$("div[id^='nav-icon']").click(function() {
		$(this).toggleClass('open');
		$('.menu-list').toggleClass('active');
	});

	$('.humburger').click(function() {
		$(this).toggleClass('active');
		$('.menu-list').slideToggle();
	});

	$('.menu-list li').click(function() {
		$('.menu-list').slideUp();
		$('.humburger').removeClass('active');
	});
});
