function sumador_array (un_array) {
	var resultado =0;

	for (var i = 0; i < un_array.length; i++) {
		resultado += un_array[i];
	}
	return resultado;
}


console.log( sumador_array([1,2,3,4,5,6]) );
console.log( sumador_array() );