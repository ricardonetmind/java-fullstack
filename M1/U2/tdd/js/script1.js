/*Suma elementos de un array aunque sean strings*/
/*function sumador_array (un_array) {
	var resultado =0;
	if(!un_array) return 0;
	for (var i = 0; i < un_array.length; i++) {
		resultado += eval(un_array[i]);
	}
	return resultado;
}*/


console.log( sumador_array([1,2,3,4,5,6])==21 );
console.log( sumador_array()==0 );
console.log( sumador_array([])==0 );
console.log( sumador_array(['1','2','3'])==6 );

/*Cuando le pase numeros negativos, los convierta a positivos y los sume*/
function sumador_array (un_array) {
	var resultado =0;
	if(!un_array) return 0;
	for (var i = 0; i < un_array.length; i++) {
		resultado += Math.abs(eval(un_array[i]));
	}
	return resultado;
}

console.log( sumador_array([1,2,-3,4,-5,6])==21 );
