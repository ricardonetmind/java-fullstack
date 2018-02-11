/*Asocia eventos a botones de cargar*/
document.getElementById('btn_carga_json').onclick = function(){
	loadJSON(procesaJSON);
}

/*Cargar botones json por ajax*/
function loadJSON(callbackfunc) {
    var url = "JSONServlet";
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
		contenido_tabla+='<tr><td>'+data[i].name+'</td><td>'+data[i].percentage+'</td><td>'+data[i].rollNo+'</td></tr>';
	}

	document.getElementById('show_data').innerHTML = contenido_tabla;
}