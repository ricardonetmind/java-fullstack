package com.netmind.tests;

import com.netmind.models.A4;
import com.netmind.models.A6;
import com.netmind.models.Printable;

public class TestInterface {

	public static void main(String[] args) {
		
		Printable unA6=new A6();
		Printable unA4=new A4();
		
		unA6.print("pantalla");
		unA4.print("impresora");
		
		
	}

}
