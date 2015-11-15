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
	
	static {
		ObjectifyService.register(Food.class);
        ObjectifyService.register(User.class);
    }
	
	@ApiMethod
	public User retrieveUser(@Named("id") String id) { //GET from DB to frontend
		return ofy().load().type(User.class).id(id).get(); //return User
	}
	
	@ApiMethod
	public void insertUser(User user) { //POST from frontend to DB
		/*this.id = user.id;
		this.userName = user.userName;
		this.token = user.token;	*/
		// need to look up user in database and set him
		ofy().save().entity(user).now();   // synchronous
	}
	
	@ApiMethod
	public Food retrieveFood(@Named("id") String id) { //GET from DB to frontend
		return ofy().load().type(Food.class).id(id).get(); //return User
	}
	
	@ApiMethod
	public void insertFood(Food food) { //POST from frontend to DB
		ofy().save().entity(food).now();   // synchronous
	}

}
