<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="head.jsp"></jsp:include>
<%
	String mierror= (String)request.getAttribute("mierror");
	String errorclass=mierror!=null?"has-error":"";
%>
<body>
	
	<jsp:include page="header.jsp"></jsp:include>
	
	<section class="container">
		<h1>Formulario de login</h1>
		<!-- esto es un comentario -->
		<%-- Este comentari no se genera en html --%>
		<% if(request.getAttribute("mierror")!=null){ %>
			<div class="alert alert-danger"><%=request.getAttribute("mierror")%></div>
		<%} %>
		<form action="login" method="POST">
			<input type="email" name="email" class="<%=errorclass %>" placeholder="Email"> 
			<input
				type="password" name="password" class="<%=errorclass %>" placeholder="Contraseña">
			<button>Enviar</button>
		</form>
	</section>
	
	<jsp:include page="footer.jsp"></jsp:include>

</body>
</html>