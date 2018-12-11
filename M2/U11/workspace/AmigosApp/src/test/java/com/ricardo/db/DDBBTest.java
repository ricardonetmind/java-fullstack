package com.ricardo.db;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.ricardo.models.Amigo;

public class DDBBTest {
	@Test
	public void testUpdateAmigoValid(){
		boolean isOk = DDBB.getInstance().actualizarAmigo(2, "Marta", 4);
		
		assertTrue(isOk);
	}
	
	@Test
	public void testUpdateAmigo24Marta4(){
		boolean isOk = DDBB.getInstance().actualizarAmigo(25, "Marta", 4);
		
		assertFalse(isOk);
	}
	
	@Test
	public void testUpdateAmigo2_4(){
		boolean isOk = DDBB.getInstance().actualizarAmigo(2, "", 4);
		
		assertFalse(isOk);
	}
	
	@Test
	public void testUpdateAmigo2null4(){
		boolean isOk = DDBB.getInstance().actualizarAmigo(2, null, 4);
		
		assertFalse(isOk);
	}
	
	@Test
	public void testUpdateAmigo2Valor6(){
		boolean isOk = DDBB.getInstance().actualizarAmigo(2, "Pepa", 6);
		
		assertFalse(isOk);
	}
	
	@Test
	public void testUpdateAmigo2num4(){
		boolean isOk = DDBB.getInstance().actualizarAmigo(2, "24m", 4);
		
		assertFalse(isOk);
	}
	
	@Test
	public void isSaved() {
		String nuevoNombre="RinaldoX";
		int nuevaPunt=5;
		
		DDBB.getInstance().actualizarAmigo(2, nuevoNombre, nuevaPunt);
		
		Amigo miAmigoAct=DDBB.getInstance().getAmigo(2);
		
		assertEquals(miAmigoAct.getName(),nuevoNombre);
		assertEquals(miAmigoAct.getPuntuacion(),nuevaPunt);
	}
	
}













