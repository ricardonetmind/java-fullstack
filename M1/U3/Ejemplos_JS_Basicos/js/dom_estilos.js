alert('A partir de aquí se ejecuta el JS que modificará el DOM');

/*uso el acceso a las propiedades de style*/
document.getElementById('el_titulo').style.background = 'black';
document.getElementById('el_titulo').style.color = 'white';

/*cambio la clase del elemento*/
document.getElementById('una_seccion').className = 'colorida';//reemplaza el valor de class por colorida
document.getElementById('una_seccion').classList.add('rojo');//añade clase rojo
document.getElementById('una_seccion').classList.remove('rojo');//elimina clase rojo 

/*cambio grupal*/
var lista_btns_hola=document.getElementsByClassName('btn_hola');
for (var i = 0; i < lista_btns_hola.length; i++) {
	// lista_btns_hola[i].style.background = 'yellow';
	lista_btns_hola[i].className = 'amarillo';
}