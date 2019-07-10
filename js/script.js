$('document').ready(function () {

	$(".nav-item").click(function () {
		var elem = $(this);
		var dwn = false;
		if (elem.hasClass("down")) {
			dwn = true;
		}
		$(".nav-item").removeClass("down");
		if (!dwn) {
			elem.addClass("down"); //to close all other arrows when another is opened
		}
	});

	$(".top-bar").mouseenter(function () {
		var elem = $(this);
		var dwn = false;
		if (elem.hasClass("active")) {
			//do nothing
		} else {
			$(".top-bar").removeClass("hover");
			$(".top-bar").addClass("unactive");
			elem.removeClass("unactive");
			elem.toggleClass("hover");
		}
		event.preventDefault();
	}).mouseleave(function () {
		$(".top-bar").removeClass("hover");
		$(".top-bar").removeClass("unactive");
	});


	$("#rotateBtn").click(function(){
         if($(".holder >div:last-child").hasClass("current")){
				console.log('clicked fro class change');
           $(".holder >div:last-child").removeClass("current");
           $(".holder >div:first-child").addClass("current");
         }else{
           $(".current").removeClass("current").next().addClass("current");
         }
      });

	$(".tag").click(function () {
		var elem = $(this);
		if (elem.closest('.item').hasClass("service-designer")) {
			$(".item-wrapper").attr('class', ' item-wrapper service-designer');
			$(".sticky-note").attr('class', ' item-wrapper service-designer');
		} else if (elem.closest('.item').hasClass("ux-designer")) {
			$(".item-wrapper").attr('class', ' item-wrapper ux-designer');
			$(".sticky-note").attr('class', ' item-wrapper ux-designer');
		}
	});

});
