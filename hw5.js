/* The user will type in the name of a specific city and push the button 'update'

After pushing the update button, the background will change to an image of the specified city

If the user chooses to type in another city name, this process should repeat itself and display the proper image each time

*/


$(document).ready(function(){

/* Using jQuery here to go find the form, wait for a submit event and then update background image */

$("form").submit(changeBackgroundImage)

/* creating a functional button here for when the user hits 'update' */

$("#submit-btn").click(changeBackgroundImage)


function changeBackgroundImage {
	event.preventDefault();
	/* declaring a variable here and giving it the value of the input field that has the ID 'city-type' */
	var city = $("city-type").val();

	if city {
		city-type = "Enter a city name..." {
		city-type = "Sydney";
		$("body").css("background", "sydney.jpg");
	}

	else {
		city-type = "Enter a city name...";
		$("body").css("background", "citipix_skyline.jpg")
	}
}
























});