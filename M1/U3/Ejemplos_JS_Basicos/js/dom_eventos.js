/*Asociando una función anónima*/
document.getElementById('btn_alert').onclick = function(evnt){
	alert('Hola!!');
}

/*Asociando una función con nombre*/
document.getElementById('btn_alert2').onclick = decirHola;

function decirHola (evnt) {
	alert('Hola sin anónima!!'); 
}

/*Selecion grupal*/
var lista_btns_hola =document.getElementsByClassName('btn_hola');
for (var i = 0; i < lista_btns_hola.length; i++) {

	lista_btns_hola[i].onclick = function (evnt) {
		alert('Boton clicado');
	}

}


var lista_btns_hola =document.getElementsByClassName('btn_hola');
for (var i = 0; i < lista_btns_hola.length; i++) {

	lista_btns_hola[i].onclick = function (evnt) {
		var val=this.getAttribute('data-val'); // obtengo el valor del atributo data-val del propio botón
		alert(val);
	}
	
}