package com.enmotion.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.enmotion.beans.StringsBeans;
import com.enmotion.beans.StudentBean;
import com.enmotion.pojos.Article;
import com.enmotion.util.SerializationUtil;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Logger logger=Logger.getLogger("MyServlet");
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		
		String[] mylist1 ={"Hola","como","estás"};
		request.setAttribute("products", mylist1);
		
		Article anArticle = new Article();
		anArticle.title="Un títulox";
		request.setAttribute("anArt", anArticle);
		
		
		StudentBean astudent= new StudentBean();
		astudent.setAge(23);
		
		StringsBeans sBeanObject = new StringsBeans();
		
		ArrayList<String> mylisttemp=new ArrayList<String>();
		mylisttemp.add("Hola");
		mylisttemp.add("Como");
		mylisttemp.add("Estas");
		mylisttemp.add("?");
		
		sBeanObject.setMylist(mylisttemp);
		
		//serialize to file
        try {
            SerializationUtil.serialize(astudent, "/astudent.ser");
            SerializationUtil.serialize(sBeanObject, "/sbean.ser");
        } catch (IOException e) {
        	logger.log(Level.SEVERE, e.getMessage() );
        }
        
        String language="fr";
        String country="FR";
        Locale currentLocale;
        ResourceBundle messages;

        currentLocale = new Locale(language, country);
        messages = ResourceBundle.getBundle("MessagesBundle", currentLocale);
        
        request.setAttribute("messages", messages);
		
		RequestDispatcher rd=request.getRequestDispatcher("examplejstl.jsp");
		rd.forward(request, response);
		
//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
