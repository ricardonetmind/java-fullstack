
//Leemos el fichero
List lineas= new File("C:\\datos.dat" ).readLines()
//Recorremos la lista
for(i in lineas){
	//Imprimo la linea leida , este log se ve en la seccion de Log
	//Output
	log.info(i)

	//Ejecuto un token/split para separar las lineas leidas
	array = i.split(",")

	//Asigno los valores a las properties para ello hago referencia
	//al TestCase (ya que estan a nivel local)
	testRunner.testCase.setPropertyValue('nombreEstudiante', array[0])
	testRunner.testCase.setPropertyValue('apellidoEstudiante', array[1])
	testRunner.testCase.setPropertyValue('edadEstudiante', array[2])

	//Para comprobar la lectura imprimiremos en el log los valores
	//asignados a los .properties
	log.info("Estudiante");
	log.info(testRunner.testCase.getPropertyValue('nombreEstudiante'))
	log.info(testRunner.testCase.getPropertyValue('apellidoEstudiante'))
	log.info(testRunner.testCase.getPropertyValue('edadEstudiante'))
}