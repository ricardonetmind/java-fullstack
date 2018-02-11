alert('A partir de aquí se ejecuta el JS que modificará el DOM');

console.log('El objeto DOM:',document);

/*Seleccion individual*/
var elem_titulo = document.getElementById('el_titulo');//obtengo el objeto el_titulo y la guardo en una variable
console.log(elem_titulo);

console.log(elem_titulo.innerHTML, document.getElementById('el_titulo').innerHTML); // aqui solo leo la propiedad

elem_titulo.innerHTML = 'Nuevo título';//Aqui cambio su valor por el "="

document.getElementById('un_parrafo').innerHTML = 'Texto seguido de una imagen: <img src="imgs/ejemplo.jpg"> más un enlace <a href="#">Enlace</a>';// texto con HTML dentro se interpreta y se generan los elementos dom correspondientes

/*Seleccion grupal*/

var lista_btns_hola = document.getElementsByClassName('btn_hola');
console.log(lista_btns_hola);

for (var idx = 0; idx < lista_btns_hola.length; idx++) {
	console.log( lista_btns_hola[idx].innerHTML );
}

var elementos_de_lista = document.getElementsByTagName('li');
console.log(elementos_de_lista);

for (var idx = 0; idx < elementos_de_lista.length; idx++) {
	console.log( elementos_de_lista[idx].innerHTML );
}