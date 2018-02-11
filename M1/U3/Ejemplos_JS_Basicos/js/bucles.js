/*Sabemos cuando terminamos, y la condicion de incremento*/
for(var j=0; j<10 ;j++){
	console.log('Esta es la ejecución:',j );
}

var nombres_de_la_clase = ['Joan','Gabriel','Vero','Rosa','Marta','Jordi'];

for(var idx=0; idx<nombres_de_la_clase.length ;idx++){
	console.log( nombres_de_la_clase[idx] );
}

/*NO sabemos cuando terminamos, pero sí la condicion de fin*/
var num_intentos=0;

while (num_intentos<3 ) {
	console.log('Esto en el intento:',num_intentos);
	num_intentos++;
}


function devuelve_nombres_concatenados( lista_nombres ){
	var nombres_concatenados = '';//aqui iré concatenando los nombres

	for (var idx = 0; idx < lista_nombres.length; idx++) {// recorro la lista de nombres
		nombres_concatenados = nombres_concatenados +', '+ lista_nombres[idx]; //nombres_concatenados es igual a su valor anterior más , más el nombre del índice idx
	}

	return nombres_concatenados;// devuelvo los nombres concatenados
}

console.log( devuelve_nombres_concatenados(nombres_de_la_clase) );

function devuelve_nombres_concatenados_mejorada( lista_nombres ){
	var nombres_concatenados = '';//aqui iré concatenando los nombres

	for (var idx = 0; idx < lista_nombres.length; idx++) {// recorro la lista de nombres
		if(idx==0) nombres_concatenados = lista_nombres[idx]; //Si estoy en la posición 0 no añado la ,
		else nombres_concatenados = nombres_concatenados + ', '+ lista_nombres[idx]; //nombres_concatenados es igual a su valor anterior más , más el nombre del índice idx
	}

	return nombres_concatenados;// devuelvo los nombres concatenados
}

console.log( devuelve_nombres_concatenados_mejorada(nombres_de_la_clase) );
