$('document').ready(function () {

	$(".nav-item").click(function () {
		event.preventDefault();
		$(this).toggleClass("down");
	});
});