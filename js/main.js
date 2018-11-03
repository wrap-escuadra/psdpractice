$(function(){
	new WOW().init();
	$('.js-wp-2').waypoint(function(direction) {

		$('.js-wp-2').addClass('animated slideInUp');
	
	},{
		offset: '70%'
	});

	$(".iphone-btn").delay(1300).animate( {bottom: "+=-3"}, 300);
	$(".iphone-btn").delay(100).animate( {bottom: "+=3"}, 300);

	$('.js-wp-3').waypoint(function(direction) {

		$('.js-wp-3').addClass('animated fadeIn');
	
	},{
		offset: '70%'
	});









}); //end jquery