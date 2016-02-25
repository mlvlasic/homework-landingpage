$(document).ready(function() {

//trying to create an autoscroll here
//for when user clicks on each nav item, browser should scroll down to corresponding page component	
		

var studyBarImages = [
	"cool_guy.jpg",
	"coffee_on_wood.jpg",
	"nice_salad.jpg",
	"office_comfy.jpg",
	"sandwich.jpg",
	"yoga_room.jpg"
];

var currentImage = 0;

$('.nextButton').click(function() {
	currentImage++
	if (currentImage == studyBarImages.length) {
		currentImage = 0
	}

	$('#cool_guy').attr('src', studyBarImages[currentImage]);

});

$('.backButton').click(function() {
	currentImage--
	if (currentImage < 0) {
		currentImage = studyBarImages.length - 1
	}

	$('#cool_guy').attr('src', studyBarImages[currentImage]);


});




});