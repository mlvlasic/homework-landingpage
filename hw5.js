/* 
 * Hi Matt!  I am adding feedback about your code in Javascript comments like this one.
 * 
 * Overall, good job!  There is a syntax error in your JS code below that is preventing 
 * the script from running, though I thought we fixed that in class?  I think maybe
 * you need to commit and/or sync?
 *
 * Also, nice job formatting/indenting and commenting your code.  It is very easy to follow.  :)
 */

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

	/* Great use of event.preventDefault() here.  Don't forget to also pass it into the funciton
	 * as an argument so that it works in all browsers. i.e. The line above should read:
	 *
	 *    function changeBackgroundImage(event) {
	 *
	 */

	event.preventDefault();

	/* declaring a variable here and giving it the value of the input field that has the ID 'city-type' */
	var city = $("#city-type").val();

	/* These if statements are the ones I was talking about above at the top of the file.  I thought
	 * we had fixed these in class and you just need to commit and/or sync.
	 *
	 * Just to recap, though, the entire conditional (the question you want to ask) needs to be in one 
	 * big parenthesis.  Each individual part (i.e. city == "Sydney") can also be in their own paranthesis,
	 * but in this case, it is not actually necessary.
	 *
	 * So this first if statement should really be:
	 *
	 *    if ((city == "Sydney") || (city == "SYD")) {
	 *
	 * (See how I put everything between the "if" and the "{" in parenthesis?)
	 *
	 * Like I said, the parenthesis around the individual checks don't really have to be there (though
	 * it doesn't hurt anything if they are), so you can also modify this if statement to be this:
	 * 
	 *    if (city == "Sydney" || city == "SYD") {
	 *
	 */

	if(city == "Sydney") || (city == "SYD") {
		/* Nice use of removeClass() and addClass(). 
		 * We did not go over chaining really in time for this homework, but don't forget that
		 * you can combine these two lines by chaining these jQuery functions, like this:
		 *
		 *    $("body").removeClass().addClass("sydney");
		 *
		 * Either is totally fine and accomplish the same goal. Just want to make sure you know
		 * about all of your options. 
		 */
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

		/* Nice use of a default class here.  You could optionally set the default "citipix"
		 * background image as the background image on the body tag in your CSS and just remove all
		 * classes here.  That way, if there are no classes on the body tag, that background image
		 * will be displayed.  If there is a class on the body tag (i.e. "sydney"), the background image
		 * specified in that class will be displayed - any styles associated with the class will overrule
		 * any of the same styles that are associated with the body tag.
		 */
	}

 }

}); 



