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

		photograph.attr('src', 'assets/Images/Shoes/' + index + '.png');
		journal.attr('src', 'assets/Images/Shoes/' + String.fromCharCode(97 + index) + '.png');
	});
}