<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page import="java.util.List" %>
    
 <jsp:useBean id="students" class="com.enmotion.beans.StudentBean" />
 <jsp:useBean id="now" class="java.util.Date" />
  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<%-- <script language="javascript" type="text/javascript" src="xx.js?t=<%=System.currentTimeMillis()%>" /> --%>
</head>
<body>
Edad: <c:out value="${students.getAge()}"/><br>
<fmt:formatDate pattern="yyyy-MM-dd" value="${now}" /><br/>
Message: <c:out value="${messages.greetings}"/><br>

Articulo: <c:out value="${anArt.title}"/><br>

<ul>
<c:forEach items="${products}" var="product">
    <li>${product}<p>cccc</p></li>
</c:forEach>
</ul>

</body>
</html>














