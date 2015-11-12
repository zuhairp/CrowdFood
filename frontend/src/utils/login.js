window.fbAsyncInit = function() {
    FB.init({
    	appId      : '813794818743608',
    	xfbml      : true,
    	version    : 'v2.5'
    });
};

window.onload = function() {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			FB.api('/me', function(response) {
				document.getElementById("userName").innerHTML = "User name : " + response.name;
				document.getElementById("id").innerHTML = "id : " + response.id;
			});
		}
		else {
		    document.getElementById("userName").innerHTML = "You need to login!!";
		    document.getElementById("id").innerHTML = "";
  	    	}
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Call this function when the 'login' button is clicked from dropdown menu
function login() {
        FB.login(function(response) {
           if (response.authResponse) 
           {
                getUserInfo(); // Get User Information.
                console.log("Login Successful"); 
            } else
            {
             console.log('Authorization failed.');
            }
         },{scope: 'email'}); 
}

// This function retrieves the user's info when they log in
function getUserInfo() {
    FB.api('/me', function(response) {
 
        //response.name       - User Full name
        //response.link       - User Facebook URL
        //response.username   - User name
        //response.id         - id
        //response.email      - User email
        
        showInfo(response.name, response.link, response.username, response.id, response.email, getPhoto());

    });
}

// Call this function when logout button is clicked from drop down menu
function logout() {
    FB.logout(function(){document.location.reload();});
}

// This function get the user's photo
// Return a url link
function getPhoto() {
    FB.api('/me/picture?type=normal', function(response) {
        return response.data.url;
    });
}

function showInfo(name, link, username, id, email, photoLink) {

	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			
		}
		else {
		    //document.getElementById("userName").innerHTML = "You need to login!!";
		    //document.getElementById("id").innerHTML = "";
  	    }
	});
			
};
