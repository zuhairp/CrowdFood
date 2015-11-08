//http://1-dot-guestbook-1057.appspot.com/.ofyguestbook.jsp

package com.CrowdFoodWeb;

import com.googlecode.objectify.ObjectifyService;

import static com.googlecode.objectify.ObjectifyService.ofy;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.CrowdFoodWeb.*;

import java.io.IOException;
import java.util.Collections;
import java.util.Date;

 




import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 

public class OfyHandler extends HttpServlet {

	static {

        ObjectifyService.register(Food.class);
        ObjectifyService.register(User.class);

    }
	
	public void storeFood(HttpServletRequest req, HttpServletResponse resp, Food food) throws IOException {

//        UserService userService = UserServiceFactory.getUserService();
//
//        User user = userService.getCurrentUser();
		//WE need to use facebook user!

		ofy().save().entity(food).now();

        //resp.sendRedirect("/ofyguestbook.jsp");

    }
	public void storeUser(HttpServletRequest req, HttpServletResponse resp) throws IOException {

	//    UserService userService = UserServiceFactory.getUserService();
	//
	//    User user = userService.getCurrentUser();
		//WE need to use facebook user!
	
	
	
	    // We have one entity group per Guestbook with all Greetings residing
	
	    // in the same entity group as the Guestbook to which they belong.
	
	    // This lets us run a transactional ancestor query to retrieve all
	
	    // Greetings for a given Guestbook.  However, the write rate to each
	
	    // Guestbook should be limited to ~1/second.
	
	   
	    String content = req.getParameter("content");
	
	    User user = new User("id");
	    
	    
	    ofy().save().entity(user).now();
	
	    resp.sendRedirect("/ofyguestbook.jsp");

	}
	public boolean userExists(String id){
		boolean exists = false;
		ObjectifyService.register(User.class);
		List<User> users;
		users = ObjectifyService.ofy().load().type(User.class).list();
		for(User user: users){
			if(user.getId() == id){
				exists = true;
			}
		}
		
		return exists;
	}
	public User loadUser(String id){
		User returnUser = null;
		ObjectifyService.register(User.class);
		List<User> users;
		users = ObjectifyService.ofy().load().type(User.class).list();
		for(User user: users){
			if(user.getId() == id){
				returnUser = user;
			}
		}
		
		return returnUser;
	}
	public Food loadFood(String id){
		Food food = null;
		ObjectifyService.register(Food.class);
		List<Food> foods;
		foods = ObjectifyService.ofy().load().type(Food.class).list();
		for(Food dish: foods){
			if(dish.getId() == id){
				food = dish;
			}
		}
		
		return food;
	}

}