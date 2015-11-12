
$('.loginButton').click(function() {
	
	FB.login(function(response){
		
		FB.api('/me', function(response) {
			alert(JSON.stringify(response));
			var info = JSON.stringify(response);
			return info;
		});
		
	}, {scope: 'public_profile,email'});
	
}); // click