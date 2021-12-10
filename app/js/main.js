$(document).ready(function () {

	// Tooltipts
	$('.tooltips__one img').mouseenter(function () {
		$('.tooltips__one').children().addClass('active');
		}
	);

	$('.tooltips__one img').mouseleave(function () {
		$('.tooltips__one').children().removeClass('active');
		}
	);

	$('.tooltips__two img').mouseenter(function () {
		$('.tooltips__two').children().addClass('active');
		}
	);

	$('.tooltips__two img').mouseleave(function () {
		$('.tooltips__two').children().removeClass('active');
		}
	);

	$('.tooltips__three img').mouseenter(function () {
		$('.tooltips__three').children().addClass('active');
		}
	);

	$('.tooltips__three img').mouseleave(function () {
		$('.tooltips__three').children().removeClass('active');
		}
	);

	$('.tooltips__four img').mouseenter(function () {
		$('.tooltips__four').children().addClass('active');
		}
	);

	$('.tooltips__four img').mouseleave(function () {
		$('.tooltips__four').children().removeClass('active');
		}
	);

});

