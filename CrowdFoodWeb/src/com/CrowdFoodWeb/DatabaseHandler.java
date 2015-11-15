package com.CrowdFoodWeb;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.response.NotFoundException;

import javax.inject.Named;

import com.googlecode.objectify.ObjectifyService;

import static com.googlecode.objectify.ObjectifyService.ofy;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Api(
		name = "crowdfoodapi",
	    version = "v1",
	    description = "Crowd Food API"
	)

@Entity
public class DatabaseHandler {
	
	@Id private String id;
	
	public Id getId() {
		return null;		
	}
	
	static {
		ObjectifyService.register(Food.class);
        ObjectifyService.register(User.class);
    }
	
	@ApiMethod(name="getUser", path="get_user", httpMethod=HttpMethod.GET)
	public User getUser(@Named("id") String id) { //GET from DB to frontend
		return ofy().load().type(User.class).id(id).get(); //return User
	}
	
	@ApiMethod(name="postUser", path="post_user", httpMethod=HttpMethod.POST)
	public void postUser(User user) { //POST from frontend to DB
		/*this.id = user.id;
		this.userName = user.userName;
		this.token = user.token;	*/
		// need to look up user in database and set him
		ofy().save().entity(user).now();   // synchronous
	}
	
	@ApiMethod(name="getFood", path="get_food", httpMethod=HttpMethod.GET)
	public Food getFood(@Named("id") String id) { //GET from DB to frontend
		return ofy().load().type(Food.class).id(id).get(); //return User
	}
	
	@ApiMethod(name="postFood", path="post_food", httpMethod=HttpMethod.POST)
	public void postFood(Food food) { //POST from frontend to DB
		ofy().save().entity(food).now();   // synchronous
	}

}
