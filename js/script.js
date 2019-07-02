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



});