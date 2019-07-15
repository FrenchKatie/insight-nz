	$(".person").each(function (index) {
		var elem = $(this);
		var photograph = elem.find('.photograph');
		var id = 5;
		var file = 'assets/Images/' + id + '/';

		photograph.attr('data-src', file + index + '.png');

	});
	var i;
	for (i = 0; i < 10; i++) {
		var id = 5;
		var imageFile = 'assets/Images/' + id + '/' + i + '.png';
		var journalFile = 'assets/Images/' + id + '/' + String.fromCharCode(97 + i) + '.png';
		//could make up a list of what ids need what tags...

		$('.grid').append(' <div class = "person"><div class="journal-wrapper"><img class="journal" src="' + journalFile + '"/></div> <div class="photograph-wrapper"><img class = "lazy photograph" src="' + imageFile + '" /></div></div>');
	}

	$('.person').on('click', clickToPerson);

	function clickToPerson(event) {
		event.stopPropagation();
		event.target.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		});
	}