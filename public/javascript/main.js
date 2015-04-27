$(function  () {


	$("#logo").animate({
		left: '-100px',
	}, 1000);

	

	$("#dhome").delay(700).animate({
        			
       			 	top: '100px',
   				 }, 300, function  () {
   				 	$(this).effect("bounce", {times: 3}, 500);
   				 });
	$("#dmedia").delay(1000).animate({
        			
       			 	top: '100px',
   				 }, 300, function  () {
   				 	$(this).effect("bounce", {times: 3}, 500);
   				 });
	$("#dabout").delay(1300).animate({
        			
       			 	top: '100px',
   				 }, 300, function  () {
   				 	$(this).effect("bounce", {times: 3}, 500);
   				 });

	$("#dcontact").delay(1600).animate({
        			
       			 	top: '100px',
   				 }, 300, function  () {
   				 	$(this).effect("bounce", {times: 3}, 500);
   				 });

	$("#dhome").mouseover(function  () {
		$("#iconhome").fadeIn();
	});
	$("#dhome").mouseleave(function  () {
		$("#iconhome").fadeOut();
	});
	$("#dmedia").mouseover(function  () {
		$("#iconmedia").fadeIn();
	});
	$("#dmedia").mouseleave(function  () {
		$("#iconmedia").fadeOut();
	});
	$("#dabout").mouseover(function  () {
		$("#iconabout").fadeIn();
	});
	$("#dabout").mouseleave(function  () {
		$("#iconabout").fadeOut();
	});
	$("#dcontact").mouseover(function  () {
		$("#iconcontact").fadeIn();
	});
	$("#dcontact").mouseleave(function  () {
		$("#iconcontact").fadeOut();
	});

	$("#gomedia").click(function(){

		$("body").animate({

			scrollTop: $("#media").offset().top
		}, 750)
	});

	$("#goabout").click(function(){

		$("body").animate({

			scrollTop: $("#about").offset().top
		}, 750)
	});

	$("#gocontact").click(function(){

		$("body").animate({

			scrollTop: $("#contact").offset().top
		}, 750)
	});

});