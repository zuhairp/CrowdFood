<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<html>

	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	</head>

	<body>
	
		<script>
  			window.fbAsyncInit = function() {
    			FB.init({
      				appId      : '813794818743608',
      				xfbml      : true,
      				version    : 'v2.5'
    			});
  			};

  			(function(d, s, id){
     			var js, fjs = d.getElementsByTagName(s)[0];
     			if (d.getElementById(id)) {return;}
     				js = d.createElement(s); js.id = id;
     				js.src = "//connect.facebook.net/en_US/sdk.js";
     				fjs.parentNode.insertBefore(js, fjs);
   				}(document, 'script', 'facebook-jssdk'));
		</script>
		
		<div
 			class="fb-like"
  			data-share="true"
  			data-width="450"
  			data-show-faces="true">
		</div>
	
		<button class='loginButton'>Click to Login</button>
		
		<footer>
			<script src="login.js"></script>
		</footer>
		
	</body>
	

</html>

