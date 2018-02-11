package com.netmind.modelos.employees;

import com.netmind.modelos.Address;
import com.netmind.modelos.Department;

public class Marketer extends Employee {
	String channel;
	boolean knowHowToDesign;
	public Marketer(int id, String name, Address address, Department department, String channel,
			boolean knowHowToDesign) {
		super(id, name, address, department);
		this.channel = channel;
		this.knowHowToDesign = knowHowToDesign;
	}
	
	
}
