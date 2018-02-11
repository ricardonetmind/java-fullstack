// document.getElementById('btn_entrar').onclick=function (evnt) {
document.getElementById('frm_entrar').onsubmit=function (evnt) {
	// var valido = validaEntradaSinAPI();
	var valido = validaEntradConAPI();
	
	if(!valido) return false;
}

function validaEntradaSinAPI() {
	// Cuidado!! Si hay alguna excepción en el método la variabla valido será indefinido
	var email=document.getElementById('email').value;
	var pass=document.getElementById('pass').value;

	var mensaje='';

	if(!email || !pass) mensaje='Introduce el email y password';
	else if(pass.length<6) mensaje='El password es demasiado corto';
	else if( !email.match(/\S+@\S+\.\S+/) ) mensaje = 'El formato del email no es correcto';

	document.getElementById('errores').innerHTML=mensaje;

	if(mensaje) return false;
	else return true;
}

function validaEntradConAPI () {
	// Cuidado!! Si hay alguna excepción en el método la variabla valido será indefinido
	var email=document.getElementById('email');
	var pass=document.getElementById('pass');
	var mensaje='';

	// debugger;

	if(!email.validity.valid && email.validity.typeMismatch)mensaje = 'El formato del email no es correcto';
	if(!pass.validity.valid && pass.validity.tooShort)mensaje = 'El password es demasiado corto';
	if(email.validity.valueMissing || pass.validity.valueMissing) mensaje='Introduce el email y password';
	document.getElementById('errores').innerHTML=mensaje;

	return mensaje?false:true;
}