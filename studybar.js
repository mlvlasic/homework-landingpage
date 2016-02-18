$(document).ready(function() {

//trying to create an autoscroll here
//for when user clicks on each nav item, browser should scroll down to corresponding page component	
		









var studyBarImages = [
	"computer.jpg",
	"coffeebar.jpg"
];

var currentImage = 0;

$('.nextButton').click(function() {
	currentImage++
	if (currentImage == studyBarImages.length) {
		currentImage = 0
	}

	$('#computer').attr('src', studyBarImages[currentImage]);

});

$('.backButton').click(function() {
	currentImage--
	if (currentImage < 0) {
		currentImage = studyBarImages.length - 1
	}

	$('#computer').attr('src', studyBarImages[currentImage]);


});



























});