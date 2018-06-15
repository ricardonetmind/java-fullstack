package com.ricardo.db;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.ricardo.models.Amigo;

public class DDBBTest2 {
	
	@Test
	public void testAddAmigo() {
		Amigo nuevoA = new Amigo(0, "Peter");
		nuevoA = DDBB.getInstance().addAmigo(nuevoA);
		
		Amigo compA=DDBB.getInstance().getAmigo( nuevoA.getId() );
		
		assertTrue(nuevoA.getName() == compA.getName());		
	}
}
