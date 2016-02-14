$(document).ready(function() {

var studyBarImages = [
	"coffeebar.jpg",
	"computer.jpg"
];

var currentImage = 0;

$('.nextButton').click(function() {
	currentImage++
	if (currentImage == studyBarImages.length) {
		currentImage = 0
	}

	$('#coffee').attr('src', studyBarImages[currentImage]);

});

$('.backButton').click(function() {
	currentImage--
	if (currentImage < 0) {
		currentImage = studyBarImages.length - 1
	}

	$('#coffee').attr('src', studyBarImages[currentImage]);


});



























});