//js for adding images depending on what link is clicked

$(".item").each(function (index) {

	var elem = $(this);
	var photograph = elem.find('.photograph');
	var journal = elem.find('.journal');
	var tag = elem.closest('.tag');

	photograph.attr('src', 'assets/Images/Shoes/' + index + '.png');
	journal.attr('src', 'assets/Images/Shoes/' + String.fromCharCode(97 + index) + '.png');

	console.log(index + ": ");
});