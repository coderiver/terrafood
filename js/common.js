$(document).ready(function() {


	$('.sproduct__title').click(function(event) {
		$(this).parent().toggleClass('is-opened')
	});
	$('.sproduct__showmore').click(function(event) {
		$(this).closest('.sproduct').toggleClass('is-showmore')
	});
});