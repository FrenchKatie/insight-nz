	var table = $("<table>");
	var tableWrapper = $("<tr>");
	for (i = 1; i <= 5; i++) { //10 "people" in grid
		var designer = getDesignerType(i);
		var columnWrapper = $("<td>").addClass("column-wrapper").addClass(designer);;
		var innertable = $("<table>");
		var tag = $('<div>').addClass('tag');
		innertable.append(tag);
		for (j = 0; j < 10; j++) { //22 guidelines 
			var personWrapper = $("<tr>");
			var person = $("<td>").addClass("person");

			var imageFile = 'assets/Images/' + i + '/' + j + '.png';
			var journalFile = 'assets/Images/' + i + '/' + String.fromCharCode(97 + j) + '.png';

			var person = $('<div>').addClass('person')
			var journalWrapper = $('<div>').addClass('journal-wrapper');
			var journal = '<img class = "journal" src = "' + journalFile + '" /> ';
			var photoWrapper = $('<div>').addClass('photograph-wrapper');
			var photo = '<img class = "lazy photograph" src="' + imageFile + '" />';
			person.append(journalWrapper.append(journal));
			person.append(photoWrapper.append(photo));

			personWrapper.append(person);
			innertable.append(personWrapper);
		}
		columnWrapper.append(innertable);
		tableWrapper.append(columnWrapper);
	}
	table.append(tableWrapper);
	$('.grid').append(table);

	$('.person').on('click', clickToPerson);

	function clickToPerson(event) {
		event.stopPropagation();
		event.target.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		});
	}

	function getDesignerType(index) {
		switch (index) {
			case 0:
			case 3:
			case 5:
				return "ux-designer";
			case 2:
			case 4:
			case 6:
				return "service-designer";
			case 1:
				return "videographer";
			case 7:
				return "typographer";
			case 8:
				return "creative";
			default:
				return "unknown";
		}
	}