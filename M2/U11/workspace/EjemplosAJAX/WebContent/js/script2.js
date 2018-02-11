/* Ejemplo botones */
document.getElementById('btn_carga_html').onclick = function(){
	loadBotones(generaEventos);
}

/*Cargar botones html por ajax*/
function loadBotones(callbackfunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
	    	console.log(xhttp.responseText);
			callbackfunc(xhttp.responseText);
		}
	};
  xhttp.open("GET", "BotonesServlet", true);
  xhttp.send();
}

function generaEventos(html){
	document.getElementById("demo").innerHTML = html;

	document.getElementById("a1").onclick = function(){
		alert(this.getAttribute("attr-val"));
	}
	document.getElementById("a2").onclick = function(){
		alert(this.getAttribute("attr-val"));
	}
}