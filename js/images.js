//js for adding images depending on what link is clicked

$(".guideline").click(function () {
	var elem = $(this);
	var id = elem.attr("id");
	showText(elem);
	showImages(id);
	doMobileStuff(elem);
});

function doMobileStuff() {
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

		var file = 'assets/Images/' + id + '/';
		photograph.attr('src', file + index + '.jpg');
		journal.attr('src', file + String.fromCharCode(97 + index) + '.png');
		elem.attr('data-guideline', id);
		elem.attr('data-person', index);
	});
}

$(".tag").click(function () {
	var elem = $(this);
	var item = elem.closest('.item');
	var filter = item.attr('class').split(' ')[2]; //this should be in a data attribute
	$(".item-wrapper").attr('data-maintag', filter);
	$(".sticky-note").show();
	$(".sticky-note").attr('class', 'sticky-note ' + filter);
	refreshFilters();
});
$(".subtag").click(function () {
	var elem = $(this);
	var item = elem.closest('.item');
	var filter = item.attr('class').split(' ')[3];
	$(".item-wrapper").attr('data-subtag', filter);
	$(".sub-sticky-note").show();
	$(".sub-sticky-note").attr('class', 'sub-sticky-note ' + filter);
	refreshFilters();
});


function refreshFilters() {
	var main = $(".item-wrapper").attr('data-maintag');
	var sub = $(".item-wrapper").attr('data-subtag');
	if (hasDoubleFilter()) {
		attachTwoFiltersToItem(main, sub);
	} else if (doesClassExist(main)) {
		attachFilterToItem(main);
	} else if (doesClassExist(sub)) {
		attachFilterToItem(sub);
	} else {
		$(".item").removeClass('filtered');
	}
}

function attachFilterToItem(filter) {
	$(".item").each(function () {
		var elem = $(this);
		if (elem.hasClass(filter)) {
			elem.addClass('filtered')
		} else {
			elem.removeClass('filtered')
		}
	});
};

function attachTwoFiltersToItem(filter1, filter2) {
	$(".item").each(function () {
		var elem = $(this);
		if (elem.hasClass(filter1) && elem.hasClass(filter2)) {
			console.log(elem);
			elem.addClass('filtered')
		} else {
			elem.removeClass('filtered')
		}
	});
};

function hasDoubleFilter() {
	var sub = $(".item-wrapper").attr('data-subtag');
	var main = $(".item-wrapper").attr('data-maintag');
	if (doesClassExist(sub) && doesClassExist(main)) {
		return true;
	}
	return false;
};

function doesClassExist(attr) {
	if (typeof attr !== typeof undefined && attr !== false && attr != "") {
		return true;
	}
	return false;
}

//removing sticky note filter
$(".sticky-note").click(function () {
	var elem = $(this);
	$(".item-wrapper").attr('data-maintag', "");
	refreshFilters();
	elem.hide();
});
$(".sub-sticky-note").click(function () {
	var elem = $(this);
	$(".item-wrapper").attr('data-subtag', "");
	refreshFilters();
	elem.hide();
});

$('.item-wrapper').on('scroll', function (index) {
	var imagePos = $('.item.one').offset().left;
	var topOfWindow = $(window).scrollLeft();
	var mrg = imagePos - topOfWindow;
	if (mrg <= 1) {
		// if mrg is less than 1 then it loses margin. Translate
		$('.insights-content').removeClass('scroller-margin');
		$('.insights-content').addClass('no-scroller-margin'); // When the carousel hit the left wall and it is swiped to the right it need to gaint he margin back
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

$('.photograph').click(function () {
	var item = this.closest('.item');
	var guideline = item.getAttribute("data-guideline");
	var person = item.getAttribute("data-person");
	var url = "";
	var produrl = "https://insight-nz.com";
	var url = "file:///Users/hannahauckram/Documents/GitHub/insight-nz";
	window.location.href = url + "/grid.html#" + guideline + person;

});




var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? null : decodeURIComponent(sParameterName[1]);
		}
	}
};

var designer = getUrlParameter('designer');
if (designer != null) {
	$(".item-wrapper").attr('data-maintag', designer);
	$(".sticky-note").show();
	$(".sticky-note").attr('class', 'sticky-note ' + designer);
	refreshFilters();
}

$("#rotateBtn").click(function () {
	$('.holder').children('div').toggleClass('current');
});
//
// $(".animsition-overlay").animsition({
//  inClass: 'overlay-slide-in-left',
//  outClass: 'overlay-slide-out-left',
//  inDuration: 1500,
//  outDuration: 800,
//  linkElement: '.animsition-link',
//  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
//  loading: true,
//  loadingParentElement: 'body', //animsition wrapper element
//  loadingClass: 'animsition-loading',
//  loadingInner: '', // e.g '<img src="loading.svg" />'
//  timeout: false,
//  timeoutCountdown: 5000,
//  onLoadEvent: true,
//  browser: [ 'animation-duration', '-webkit-animation-duration'],
//  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//  overlay : true,
//  overlayClass : 'animsition-overlay-slide',
//  overlayParentElement : 'body',
//  transition: function(url){ window.location.href = url; }
// });
