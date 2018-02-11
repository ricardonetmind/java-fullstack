$(document).ready(function() {        
	$('#submit').click(function(event) {  
		var username=$('#user').val();
		$.post('ActionServlet',{user:username},function(responseText) { 
			$('#welcometext').text(responseText);         
		});
	});

	$('#btn_carga_html').click(function(event) {
		$.get('BotonesServlet',function(responseText) { 
			console.log(responseText)
			generaEventos(responseText);         
		});
	});

});

function generaEventos(html){
	$('#demo').html(html);

	$('#a1').click(function (evnt) {
		alert($(this).attr("attr-val"));
	});

	$('#a2').click(function (evnt) {
		alert($(this).attr("attr-val"));
	});
	
}