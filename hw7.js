$(document).ready(function() { //telling the page here not to act until the full page loads to avoid error

//create an array called 'cities' and store each city image within it	
	var cities = [
		"LA",
		"NYC",
		"SF",
		"SYD",
		"ATX"
	];

//now that we have created a location for the city images and know where they are, we need to deal with the dropdown options
	
//create a for loop to add values as options into the dropdown menu
	for (i = 0; i < cities.length; i++) {
		city = cities[i] //this defines each specific city as its own
		$('#city-type').val(city) //could also extend this with the next line --compress the two for cleaner code
		$('#city-type').append("<option>" + city + "</option");
	}

//create a function to execute the user's action of selecting an input and thus changing the background picture displayed
$('#city-type').change(backgroundPicture);

//use code from last time around to add and remove classes based on what is entered into input field
function backgroundPicture(event) {
		event.preventDefault();

    if (city == "NYC") {
        $("body").removeClass().addClass("nyc");
    }
    else if (city == "SF") {
        $("body").removeClass().addClass("sf");
    }
    else if (city == "LA") {
        $("body").removeClass().addClass("la");    
    }
    else if (city == "ATX") {
        $("body").removeClass().addClass("austin");    
    }
    else if (city == "SYD") {
        $("body").removeClass().addClass("sydney");    
    }
    else {
        $("body").removeClass();
    }
}

});































