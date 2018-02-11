var un_numero = 1;
var un_flotante = 1.5;

var otro_numero = '1';

var esVerdad = true;
// otro_numero = '5';

if( otro_numero == '1' ){
	console.log('Cierto! es 1!');
} else {
	console.log('NO es Cierto! No es 1!');
}



if( otro_numero != '1' ){
	console.log('NO Cierto! es 1!');
} else {
	console.log('Es Cierto! No es 1!');
}

if( otro_numero === 1 ){
	console.log('Cierto! es 1!');
} else {
	console.log('NO es Cierto! No es 1!');
}

if( esVerdad ){
	console.log('Es verdad!');
}else{
	console.log('NO es verdad!');
}

if( !esVerdad ){
	console.log('No Es verdad!');
}else{
	console.log('Es verdad!');
}


var un_texto ='esto es un texto';
var otro_texto ='esto es otro texto';


console.log('Evaluacion de condicion:' ,un_texto == 'mama' && otro_texto == 'papa' );

if( un_texto == 'mama' && otro_texto == 'papa' ){
	console.log('Son correctas! un_texto es mama y otro_texto es papa');
}else{
	console.log('NO son correctas! un_texto NO es mama y otro_texto NO es papa');
}


if( un_texto == 'mama' || otro_texto == 'esto es otro texto' ){
	console.log('Son correctas! un_texto es mama U otro_texto es esto es otro texto');
}else{
	console.log('NO son correctas! un_texto NO es mama O otro_texto NO es esto es otro texto');
}

if( un_texto == 'mama' && otro_texto == 'esto es otro texto' ){
	console.log('Son correctas! un_texto es mama U otro_texto es esto es otro texto');
}else{
	console.log('NO son correctas! un_texto NO es mama O otro_texto NO es esto es otro texto');
}


if( otro_numero == '1' ){
	console.log('Cierto! es 1!');
} else if(otro_numero == '2'){
	console.log('Cierto! es 2!');
}  else if(otro_numero == '3'){
	console.log('Cierto! es 3!');
} else {
	console.log('NO es Cierto! No es 1 ni 2 ni 3!');
}


if( otro_numero == '1' ){
	console.log('Cierto! es 1!');
}

if( otro_numero == '2' ){
	console.log('Cierto! es 2!');
}