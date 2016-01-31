/* We want three functional buttons.       */

$(document).ready(function(){

$('.readmore').click(continuereading);
$('.readless').click(stopreading);
$('.learnmore').click(continuelearning);

function continuereading () {
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
}

function stopreading () {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
}

function continuelearning () {
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide ();
}


});