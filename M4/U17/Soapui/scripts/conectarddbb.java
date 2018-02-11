//Importo librerias
import groovy.sql.Sql;

//Defino variables y asignos los valores de conexion
def url="jdbc:mysql://host:puerto/esquema";
def username="usuario"
def password="password"
def driver="com.mysql.jdbc.Driver"

//Variable de contexto con la conexion a la base de datos.
def sql = Sql.newInstance(url, username, password, driver);

//Verifico que haya podido establecer conexión
if(sql==null)
	log.info ("No se pudo establecer conexion")
else{
	log.info ("Conectada")
	//Leo los valores asignados a los properties y asignamos variables
	def nombreEstudiante = testRunner.testCase.getPropertyValue('nombreEstudiante')
	def apellidoEstudiante =  testRunner.testCase.getPropertyValue('apellidoEstudiante')
	def edadEstudiante  =  testRunner.testCase.getPropertyValue('edadEstudiante')

	log.info("Insercion")

	//Query a Ejecutar
	def p1= sql.execute("insert into estudiante(nombre,apellidos,edad) "+
	"values ('${nombreEstudiante}' , '${apellidoEstudiante}', '${edadEstudiante}')")

	log.info(p1)
	log.info("Insercion Finalizada")
}

//Cierro la conexión a la base de datos
if (null != sql){
	sql.close();
}