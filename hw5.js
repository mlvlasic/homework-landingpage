/* The user will type in the name of a specific city and push the button 'update'

After pushing the update button, the background will change to an image of the specified city

If the user chooses to type in another city name, this process should repeat itself and display the proper image each time

*/


$(document).ready(function(){

/* Using jQuery here to go find the form, wait for a submit event and then update background image */

$("form").submit(changeBackgroundImage);

/* creating a functional button here for when the user hits 'update' */

//$("#submit-btn").click(changeBackgroundImage); //redundant to put this in


function changeBackgroundImage() {
	event.preventDefault();
	/* declaring a variable here and giving it the value of the input field that has the ID 'city-type' */
	var city = $("#city-type").val();

	if(city == "Sydney") || (city == "SYD") {
		$("body").removeClass();
		$("body").addClass("sydney");
	}

	else if(city == "NYC") || (city == "New York") || (city == "New York City") {
		$("body").removeClass();
		$("body").addClass("nyc");
	}

	else if (city == "San Francisco")  || (city == "Bay Area") || (city == "SF") {
		$("body").removeClass();
		$("body").addClass("sf");
	}

	else if (city == "Los Angeles") || (city == "LAX") || (city == "LA") {
		$("body").removeClass();
		$("body").addClass("la");
	}

	else if (city == "Austin") || (city == "ATF") {
		$("body").removeClass();
		$("body").addClass("austin");
	}

	else {
		$("body").removeClass();
		$("body").addClass("citipix");
	}

 }

}); 



