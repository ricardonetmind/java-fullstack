<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<jsp:include page="head.jsp"></jsp:include>
<body>
	<jsp:include page="header.jsp"></jsp:include>
	
	<c:if test="${not empty error}">
		<div class="alert alert-danger">${error}</div>
	</c:if>
		
	<section>
		<h2>Compra!!!</h2>	
		<form method="POST">
			<button>Comprar</button>
		</form>
	</section>

	<jsp:include page="footer.jsp"></jsp:include>	
</body>
</html>