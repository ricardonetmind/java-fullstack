function nombre_apellido(un_nombre,un_apellido){ // esperamos recibir un nombre y un apellido
	var resultado = un_nombre+' '+un_apellido; // concatenamos el nombre y apellido y lo almacenamos en resultado

	return resultado;// devolvemos resultado
}

var nombre_completo_sergi = nombre_apellido('Sergi','Cerezo');//llamamos a la función

console.log(nombre_completo_sergi);