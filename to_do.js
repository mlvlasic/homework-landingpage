$(document).ready(function() {

$('#submitNewItem').submit(addToList);

function addToList() {
	event.preventDefault;
	var listItem = $('#newItem').val();

	$('#toDoList').append('<li>' + listItem + '</li>');

	var display = $('#toDoList').html();

}




























});