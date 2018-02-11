$(document).ready(function(){
	// Selección de un elemento por id
	$('#l1').before('<p>Mensaje antes</p>');
	$('#l1').after('<p>Mensaje después</p>');
	$('#l1').append('<p>Mensaje dentro</p>');
	$('#l1').wrap('<p></p>');
});