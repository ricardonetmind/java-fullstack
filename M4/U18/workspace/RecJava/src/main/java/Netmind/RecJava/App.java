package Netmind.RecJava;

import java.util.Date;

import com.netmind.models.Foto;
import com.netmind.models.Usuario;

/**
 * Hello world!
 *
 */
public class App{
    public static void main( String[] args ){
        Foto unaFoto = new Foto("jpeg", "200x500", "rojo,azul,verde", "Foto1", null, new Date(), new Usuario(), null, null);
        
        unaFoto.setTitulo("Nuevo titulo");
        
        System.out.println("<h1>"+unaFoto.getTitulo()+"</h1>");
        
    }
}
