$(document).ready(function() {


	$('.sproduct__title').click(function(event) {
		$(this).parent().toggleClass('is-opened')
	});
	$('.sproduct__showmore').click(function(event) {
		$(this).closest('.sproduct').toggleClass('is-showmore')
	});

	$('.product__nav a').click(function(event) {
		$('.product__nav a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
});