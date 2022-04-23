<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Postgresql Query</title>
<link href="index.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="form">
	<form method="POST" action="postrequest">
	  <label for="searchtext">Search id</label><br>
	  <input type="text" id="searchbar" name="searchbar"><br>
	  <input type="submit" id="mainbutton" value="Query!">
	</form>	
</div>
<textarea id="textarea" name="textarea" rows="6" cols="50">
Output will be shown here...
</textarea>
</body>
</html>