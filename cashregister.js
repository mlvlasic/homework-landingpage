/* need to go and get value of new entry */

$('#entry').submit(updateRegister);

/* submit event says it will wait around until the form is submitted and then it will do something */

function updateRegister(event) {
	event.preventDefault();
	var newAmount = $('#newEntry').val();

	/* variable is equal to whatever has ID of new entry which is the input field */



	// display $$$$
	$('#entries').prepend('<tr><td>' + newAmount + '</td></tr>');

	//create and display total

	var total = $('#total').html();
	$('#total').html( parseFloat(newAmount) + parseFloat(total) );

	//right now it's treating this like two strings -- if you add 30 to it it becomes 30$0.00 because it's adding the string 30 to the string $0.00
	//need to treat these like numbers (floats in this case since they might be weird numbers like 19.99) instead of strings
	//parseFloat will do the above
	//partInt would be parse integer (an integer is a whole number in JavaScript)



}


	
