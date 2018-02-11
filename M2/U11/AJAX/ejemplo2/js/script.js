/*Asocia eventos a botones de cargar*/
document.getElementById('btn_carga_html').onclick = function(){
	loadBotones(generaEventos);
}

document.getElementById('btn_carga_json').onclick = function(){
	loadJSON(procesaJSON);
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
  xhttp.open("GET", "ajax/botones.html", true);
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


/*Cargar botones json por ajax*/
function loadJSON(callbackfunc) {
    var url = "ajax/data.json";
    var request = new XMLHttpRequest();
    request.open("POST", url,true);  //Solo configura la llamada
    request.onload = function() {
	    if (request.status == 200) {  //200 significa correcto.
	    	var data = JSON.parse(request.responseText);
	    	console.log(data);
	    	callbackfunc(data);
		}
    };
  	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.send();
}

function procesaJSON(data){
	var contenido_tabla='<tr><th>Name</th><th>%</th><th>RollNo</th></tr>';

	if(data)for (var i = 0; i < data.length; i++) {
		contenido_tabla+='<tr><td>'+data[i].Name+'</td><td>'+data[i].Percentage+'</td><td>'+data[i].RollNo+'</td></tr>';
	}

	document.getElementById('show_data').innerHTML = contenido_tabla;
}