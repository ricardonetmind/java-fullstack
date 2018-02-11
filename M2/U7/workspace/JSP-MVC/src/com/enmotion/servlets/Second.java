package com.enmotion.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.enmotion.beans.StringsBeans;
import com.enmotion.beans.StudentBean;
import com.enmotion.util.SerializationUtil;

/**
 * Servlet implementation class Second
 */
//@WebServlet("/Second")
public class Second extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Second() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		StudentBean aStudent = null;
		int edad=0;
		
		StringsBeans sBeanDesObject =null;
		List<String> mylist= null;
		
        try {
        	aStudent = (StudentBean) SerializationUtil.deserialize("/astudent.ser");
        	edad = aStudent.getAge();
        	
        	sBeanDesObject=(StringsBeans) SerializationUtil.deserialize("/sbean.ser");
        	mylist= sBeanDesObject.getMylist();
        } catch (ClassNotFoundException | IOException e) {
            e.printStackTrace();
        }
        
		response.getWriter().
		append("Edad: "+edad+"<br>Lista:"+
		(mylist!=null?mylist.toString():"NADA") );
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
