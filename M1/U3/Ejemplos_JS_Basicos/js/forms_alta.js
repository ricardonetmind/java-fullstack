// document.getElementById('btn_entrar').onclick=function (evnt) {
document.getElementById('frm_entrar').onsubmit=function (evnt) {
	var valido = validaEntradConAPI();
	if(!valido) return false;
}

function validaEntradConAPI () {
	// Cuidado!! Si hay alguna excepción en el método la variabla valido será indefinido
	var nombre=document.getElementById('nombre');
	var apellido=document.getElementById('apellido');
	var edad=document.getElementById('edad');
	var email=document.getElementById('email');

	//isOK es un flag que me permitirá indicar si hay algún error en alguna de las verificaciones
	var isOK=true;

	// debugger;
	// Limpio los mensajes de error
	var bloques_error=document.getElementsByClassName('mensajes_error');
	for (var i = 0; i < bloques_error.length; i++) {
		var mensajes_error = bloques_error[i].getElementsByTagName('div');
		for (var j = 0; j < mensajes_error.length; j++) mensajes_error[j].classList.remove('show');
	}
	
	// Verifico si el nombre es válido
	if(!nombre.validity.valid){
		if(nombre.validity.tooShort) document.getElementById('nombre[tooShort]').classList.add('show');
		if(nombre.validity.patternMismatch) document.getElementById('nombre[patternMismatch]').classList.add('show');
		if(nombre.validity.valueMissing) document.getElementById('nombre[valueMissing]').classList.add('show');
		isOK=false;
	}

	if(!apellido.validity.valid){
		if(apellido.validity.tooShort) document.getElementById('apellido[tooShort]').classList.add('show');
		if(apellido.validity.patternMismatch) document.getElementById('apellido[patternMismatch]').classList.add('show');
		if(apellido.validity.valueMissing) document.getElementById('apellido[valueMissing]').classList.add('show');
		isOK=false;
	}

	if(!edad.validity.valid){
		if(edad.validity.rangeOverflow) document.getElementById('edad[rangeOverflow]').classList.add('show');
		if(edad.validity.rangeUnderflow) document.getElementById('edad[rangeUnderflow]').classList.add('show');
		if(edad.validity.valueMissing) document.getElementById('edad[valueMissing]').classList.add('show');
		isOK=false;
	}

	if(!email.validity.valid){
		document.getElementById('email[error]').classList.add('show');
		isOK=false;
	}

	return isOK;
}
