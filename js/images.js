//js for adding images depending on what link is clicked

$(".guideline").click(function () {
	var elem = $(this);
	var id = elem.attr("id");
	showText(elem);
	showImages(id);
});

function showText(elem) {
	elem.addClass("visited");
	$('.active-guideline-link-text').text(elem.text().trim());
	$('.active-guideline-link').addClass("active");

}

function showImages(id) {
	$(".insights-content").show();
	$(".item").each(function (index) {
		var elem = $(this);
		var photograph = elem.find('.photograph');
		var journal = elem.find('.journal');
		var tag = elem.closest('.tag');
		id = 5;
		var file = 'assets/Images/' + id + '/';

		photograph.attr('src', file + index + '.png');
		journal.attr('src', file + String.fromCharCode(97 + index) + '.png');

	});
}

$(".tag").click(function () {
	var elem = $(this);
	if (elem.closest('.item').hasClass("service-designer")) {
		$(".item-wrapper").attr('class', ' item-wrapper service-designer');
		$(".sticky-note").attr('class', ' sticky-note service-designer');
	} else if (elem.closest('.item').hasClass("ux-designer")) {
		$(".item-wrapper").attr('class', ' item-wrapper ux-designer');
		$(".sticky-note").attr('class', ' sticky-note ux-designer');
	} else if (elem.closest('.item').hasClass("typographer")) {
		$(".item-wrapper").attr('class', ' item-wrapper typographer');
		$(".sticky-note").attr('class', ' sticky-note typographer');
	}
});