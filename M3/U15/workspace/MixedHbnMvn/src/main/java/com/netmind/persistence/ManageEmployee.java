package com.netmind.persistence;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.netmind.models.Department;
import com.netmind.models.Employee;

public class ManageEmployee {

	private SessionFactory factory = null;

	private static ManageEmployee instance = null;

	private ManageEmployee() {
		factory = new Configuration().configure().buildSessionFactory();
	}

	public static ManageEmployee getInstance() {
		if (instance == null) {
			instance = new ManageEmployee();
		}

		return instance;
	}

	public void insertEntities() {
		Session session = factory.openSession();

		Transaction t = session.beginTransaction();

		Employee e1 = new Employee("Ricarda", "Juarez");
		session.persist(e1);

		Employee e2 = new Employee("Juan", "Garc�a");
		session.persist(e2);

		Department d1 = new Department("Marketing", "Barcelona");
		session.persist(d1);

		t.commit();
		session.close();
	}

	public int insertEmpleado(Employee empleadoNuevo) {

		Session session = factory.openSession();

		Transaction t = session.beginTransaction();
		int eid = ((Integer) session.save(empleadoNuevo)).intValue();

		t.commit();
		session.close();

		return eid;
	}
	
	public Employee getEmpleado(int eid){
		Session session = factory.openSession();

		Transaction t = session.beginTransaction();
		Employee elEmpleado = (Employee)session.get(Employee.class,eid);

		t.commit();
		session.close();

		return elEmpleado;
	}
}
