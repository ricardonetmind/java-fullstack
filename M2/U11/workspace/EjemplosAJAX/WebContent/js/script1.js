/* Ejemplo nombre */
document.getElementById('submit').onclick=function (evnt) {
	var nombre = document.getElementById('user').value;
	var dataToSend = new FormData(); 
	dataToSend.append('user',nombre);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
	    	console.log(xhttp.responseText);
	    	document.getElementById('welcometext').innerHTML=xhttp.responseText;
		}
	};
	xhttp.open("POST", "ActionServlet", true);
	xhttp.send(dataToSend);
}
