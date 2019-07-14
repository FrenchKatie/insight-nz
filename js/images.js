//js for adding images depending on what link is clicked

$(".guideline").click(function () {
	var elem = $(this);
	var id = elem.attr("id");
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
	// $(".item:not(:first)").each(function (index) {
	$(".item").each(function (index) {
		var elem = $(this);
		var photograph = elem.find('.photograph');
		var journal = elem.find('.journal');
		var tag = elem.closest('.tag');
		var subtag = elem.closest('.subtag');

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

$(".subtag").click(function () {
	// console.log('function run');
	var elem = $(this);
	if (elem.closest('.item').hasClass("inhouse")) {
		$(".item-wrapper").attr('class', ' item-wrapper inhouse');
		$(".sticky-note").attr('class', ' sub-sticky-note inhouse');
		// console.log('inhouse subtag was clicked');
	} else if (elem.closest('.item').hasClass("agency")) {
		$(".item-wrapper").attr('class', ' item-wrapper agency');
		$(".sticky-note").attr('class', ' sub-sticky-note agency');
		// console.log('agency subtag was clicked');
	} else if (elem.closest('.item').hasClass("freelance")) {
		$(".item-wrapper").attr('class', ' item-wrapper freelance');
		$(".sticky-note").attr('class', ' sub-sticky-note freelance');
		// console.log('freelance subtag was clicked');
	}
});

$('.item-wrapper').on('scroll', function (index) {
	// console.log('Working');
	var imagePos = $('.item.one').offset().left;
	var topOfWindow = $(window).scrollLeft();
	var mrg = imagePos - topOfWindow;
	if (mrg <= 1) {
		// if mrg is less than 1 then it loses margin. Translate
		// $('.insights-content').css('margin-left', 0 + 'px');
		$('.insights-content').removeClass('scroller-margin');
		$('.insights-content').addClass('no-scroller-margin');

		// When the carousel hit the left wall and it is swiped to the right it need to gaint he margin back
		console.log("margin-lost");
	} else if (mrg <= 600){
		//or if margin is less than 600, add margin.
		console.log('else if');
		// $('.insights-content').css('margin-left', 450 + 'px');
		$('.insights-content').removeClass('no-scroller-margin');
		console.log('margin less than 600, no-scroller-margin class removed');
		$('.insights-content').addClass('scroller-margin');
		console.log('margin less than 600, scroller-margin class add');


	} else {
		console.log('else');
	}
	if (mrg < topOfWindow) {
		console.log('top of window');
		$(this).delay(index * 600).queue(function () {
			// $('.insights-content').css('margin-left', mrg + 'px')

		});
	}
});
