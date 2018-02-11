$(document).ready(function(){
	// Selección de un elemento por id
	$('#l1').attr('data-attr','nuevo valor');
	console.log($('#l1').attr('data-attr'));

	$('.clase_lista').click(function(event) {
		alert( $(this).attr('data-attr') );
	});

	$('button:first').click(function(event) {
		$('.clase_lista').each(function(index) {
			$(this).attr('data-attr', 'atributo '+(index+1) );
		});
	});

	$('button:nth(1)').click(function(event) {
		$('ul').fadeOut('slow');
	});

	$('button:last').click(function(event) {
		$('ul').fadeIn('fast');
	});
	


});