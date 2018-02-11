package com.netmind.tests;

import com.netmind.models.Animal;
import com.netmind.models.Humano;
import com.netmind.models.Leon;

public class TestAbstract {
	
	public static void main(String[] args) {
		Animal unLeon = new Leon();
		Animal unHumano = new Humano();
		
		unLeon.respirar();
		unLeon.emitirOnomatopeya();
		unLeon.mover(100);
		unLeon.morir();
		
		unHumano.respirar();
		unHumano.emitirOnomatopeya();
		unHumano.mover(100);
		unHumano.morir();
	}
	
}
