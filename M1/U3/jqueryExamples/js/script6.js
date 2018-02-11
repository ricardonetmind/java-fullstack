$(document).ready(function(){
	
	$("form[name='registration'] button").click(function(event) {
		$("form[name='registration']").validate(
		{
		    // Especifica las reglas de validación
		    rules: {

		    	email: {
		    		required: true,
		        	email: true // Indica que es de tipo email
		    	},

		    	pass:{
		    		required:true
		    	}

			},
		    // Especifica los mensajes de error
		    messages: {
		    	email: "Please enter a valid email address",
		    	pass: "Please enter a valid password"
		    },
		    // Envía el formulario cuando es correcto
		    submitHandler: function(form) {
		    	form.submit();
		    }
		}
		);
	});


});