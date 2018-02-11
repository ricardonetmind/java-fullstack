var req = new XMLHttpRequest();//objeto AJAX

document.getElementById('btn_ajax').onclick = function (evnt) {
	
	req.open("GET", 'ajax/resultado.html', true); //la dirección que pedimos
	req.onreadystatechange = funcionDeCallback; // la función de callback
	req.send(); //envío de petición

}

function funcionDeCallback(evnt){
	if (req.readyState == 4) { //4:la respuesta ha terminado de llegar

		document.getElementById('resultado_ajax').innerHTML = req.responseText;
	}
}

