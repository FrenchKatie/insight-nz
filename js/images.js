//js for adding images depending on what link is clicked

$(".guideline").click(function () {
	var elem = $(this);
	var id = elem.attr("id");
	showImages(id);
});

$(".insights-content").hide();

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