package com.netmind.controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;  
import org.hibernate.SessionFactory;  
import org.hibernate.Transaction;  
import org.hibernate.cfg.Configuration;

import com.netmind.models.Department;
import com.netmind.models.Employee;
import com.netmind.persistence.ManageEmployee;  

@WebServlet("/")
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		ManageEmployee me= ManageEmployee.getInstance();
		int eid = me.insertEmpleado( new Employee("Peter","Iustinov") );
		System.out.println("Empleado guardado:"+eid);
		
		Employee eGuardado = me.getEmpleado(eid);
		System.out.println("Empleado recuperado:"+eGuardado);
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
