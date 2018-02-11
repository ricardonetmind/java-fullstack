package com.netmind.Service;

import com.netmind.model.Student;

public class StudentBeanService {
	public String getStudentsData() {

		Student s = new Student();// object is created

		s.setFirstName("Arjun");// setting value to the object

		return s.getFirstName();

	}
}
