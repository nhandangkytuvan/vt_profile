$(document).ready(function() {
	$(".navbar-brand").click(function(event) {
		$(".content div.panel").slideDown(function(){
			$('body .navbar-default .navbar-collapse ul li').removeClass('active');
		});
	});
	$('body .navbar-default .navbar-collapse ul li a').click(function(event) {
		$(this).parent('li').addClass('active');
		$(this).parent('li').siblings('li').removeClass('active');
		var id = $(this).attr('data-target');
		$(id).siblings('div').slideUp('slow');
		$(id).slideDown('slow');
	});
});