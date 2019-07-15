//js for adding images depending on what link is clicked

$(".guideline").click(function () {
	var elem = $(this);
	var id = elem.attr("id");
	// console.log(id);
	showText(elem);
	showImages(id);
	doMobileStuff(elem);
});

function doMobileStuff(elem) {
	if ($(window).width() < 768) {
		$(".guideline").hide('slide').delay(1000).queue(function () {
			$(".insights-content").show('slide', {
				direction: "right"
			}, 1000).dequeue();
		});

		$('.insights.nav-link').find('.arrow').css('display', 'inline-block');
		$('.insights.nav-link').find('.arrow').css('transform', 'rotate(180deg)');
		$('.navbar-fixed-top.main').addClass('selected');



	}
}

function showText(elem) {
	elem.addClass("visited");
	$('.active-guideline-link-text').text(elem.text().trim());
	$('.active-guideline-link').addClass("active");
	$('#rotateBtn').show();
}

function showImages(id) {
	$(".insights-content").show();
	$(".item").each(function (index) {
		var elem = $(this);
		var photograph = elem.find('.photograph');
		var journal = elem.find('.journal');
		var tag = elem.closest('.tag');
		var subtag = elem.closest('.subtag');
		var file = 'assets/Images/' + id + '/';
		photograph.attr('src', file + index + '.jpg');
		journal.attr('src', file + String.fromCharCode(97 + index) + '.png');
	});
}

$(".tag").click(function () {
	var elem = $(this);
	if (elem.closest('.item').hasClass("service-designer")) {
		//if user clicks service-designer filter
		console.log('service designer filter added');
		$(".item-wrapper").attr('class', ' item-wrapper service-designer');
		$(".sticky-note").attr('class', ' sticky-note service-designer');


	} else if (elem.closest('.item').hasClass("ux-designer")) {
			//if user clicks ux-designer filter
		console.log('ux designer filter added');
		$(".item-wrapper").attr('class', ' item-wrapper ux-designer');
		$(".sticky-note").attr('class', ' sticky-note ux-designer');

	} else if (elem.closest('.item').hasClass("typographer")) {
			//if user clicks typographer filter
		console.log('typographer filter added');
		$(".item-wrapper").attr('class', ' item-wrapper typographer');
		$(".sticky-note").attr('class', ' sticky-note typographer');
	}
});


//removing sticky note filter
$(".sticky-note").click(function () {
	var elem = $(this);
	console.log(elem);
	console.log('sticky note click');
	// $(".item-wrapper").removeClass( 'ux-designer');
	// $(".sticky-note").removeClass( 'sticky-note');

	if (elem.hasClass("service-designer")) {
		console.log('service-designer  filter removed');
		$(".item-wrapper").removeClass( 'service-designer');
		$(".sticky-note").removeClass( 'sticky-note');


	} else if (elem.hasClass("ux-designer")) {
		console.log('ux designer filter removed');
		$(".item-wrapper").removeClass( 'ux-designer');
		$(".sticky-note").removeClass( 'sticky-note');

	} else if (elem.hasClass("typographer")) {
		console.log('typographer filter removed');
		$(".item-wrapper").removeClass( 'typographer');
		$(".sticky-note").removeClass( 'sticky-note');
	}
});

$(".subtag").click(function () {
	// console.log('function run');
	var elem = $(this);
	if (elem.closest('.item').hasClass("inhouse")) {
		$(".item-wrapper").attr('class', ' item-wrapper inhouse');
		$(".sub-sticky-note").attr('class', ' sub-sticky-note inhouse');
		// console.log('inhouse subtag was clicked');
	} else if (elem.closest('.item').hasClass("agency")) {
		$(".item-wrapper").attr('class', ' item-wrapper agency');
		$(".sub-sticky-note").attr('class', ' sub-sticky-note agency');
		// console.log('agency subtag was clicked');
	} else if (elem.closest('.item').hasClass("freelance")) {
		$(".item-wrapper").attr('class', ' item-wrapper freelance');
		$(".sub-sticky-note").attr('class', ' sub-sticky-note freelance');
		// console.log('freelance subtag was clicked');
	}
});

$('.item-wrapper').on('scroll', function (index) {
	var imagePos = $('.item.one').offset().left;
	var topOfWindow = $(window).scrollLeft();
	var mrg = imagePos - topOfWindow;
	if (mrg <= 1) {
		// if mrg is less than 1 then it loses margin. Translate
		$('.insights-content').removeClass('scroller-margin');
		$('.insights-content').addClass('no-scroller-margin');// When the carousel hit the left wall and it is swiped to the right it need to gaint he margin back
		// console.log("margin-lost");
	} else if (mrg <= 600) {
		//or if margin is less than 600, add margin.
		// console.log('else if');
		$('.insights-content').removeClass('no-scroller-margin');
		// console.log('margin less than 600, no-scroller-margin class removed');
		$('.insights-content').addClass('scroller-margin');
		// console.log('margin less than 600, scroller-margin class add');


	} else {
		// console.log('else');
	}
	if (mrg < topOfWindow) {
		// console.log('top of window');
		$(this).delay(index * 600).queue(function () {
			// $('.insights-content').css('margin-left', mrg + 'px')

		});
	}
});
