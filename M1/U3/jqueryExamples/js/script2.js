$(document).ready(function(){
	// Selección de un elemento por id
	$('#l1').html('Elemento modificado 2');

	// Selección de un elemento por tag y asociado un click
	$('h1').click(function(event) {
		alert('clicado!!');
	});

	// seleccion de elementos por clase
	$('.clase_lista').each( function(index){
		console.log( $(this).html() );
	} );

	$('li').click(function(event) {
		alert('Clickado!!');
	});	

	$('li').each(function(index, el) {
		console.log( $(this).html() );
		$(this).click(function(event) {
			alert('Clickado!!');
		});
	});

});