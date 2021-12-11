$(document).ready(function () {

	// Tooltipts
	$('.tooltips__one img').hover(function (e) {
		e.preventDefault();
		$('.tooltips__one').children().toggleClass('active');
		}
	);

	$('.tooltips__two img').hover(function () {
		$('.tooltips__two').children().toggleClass('active');
		}
	);

	$('.tooltips__three img').hover(function () {
		$('.tooltips__three').children().toggleClass('active');
		}
	);

	$('.tooltips__four img').hover(function () {
		$('.tooltips__four').children().toggleClass('active');
		}
	);

});
