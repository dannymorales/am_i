$(function  () {


	$("#logo").animate({
		left: '-100px',
	}, 1000);

	$(window).scroll(function  () {
		if($(this).scrollTop() > 1000){
			$("#popupmenu").fadeIn(500);
		}
		else{
			$("#popupmenu").fadeOut(500);
		}
	});


	$(window).scroll(function  () {
		if($(this).scrollTop() > 3000){
			$("#facebook").stop().delay(300).fadeIn(500);
			$("#twitter").stop().delay(600).fadeIn(500);
			$("#pinterest").stop().delay(900).fadeIn(500);
			$("#youtube").stop().delay(1100).fadeIn(500);
		}

		else{
			$("#facebook").stop().fadeOut();
			$("#twitter").stop().fadeOut();
			$("#pinterest").stop().fadeOut();
			$("#youtube").stop().fadeOut();
		}
	});

	$("#dateavailable").datepicker();
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

	$("#gomedia, #agomedia").click(function(){2

		$("body").animate({

			scrollTop: $("#media").offset().top
		}, 750)
	});

	$("#goabout, #agoabout").click(function(){

		$("body").animate({

			scrollTop: $("#about").offset().top
		}, 750)
	});

	$("#gocontact, #agocontact").click(function(){

		$("body").animate({

			scrollTop: $("#contact").offset().top
		}, 750)
	});
	$("#agosocialmedia").click(function(){

		$("body").animate({

			scrollTop: $("#footer").offset().top
		}, 750)
	});
	
	

});