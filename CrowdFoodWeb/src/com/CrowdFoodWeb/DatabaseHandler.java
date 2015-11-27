package com.CrowdFoodWeb;

import java.util.List;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.response.NotFoundException;

import javax.inject.Named;

import com.googlecode.objectify.ObjectifyService;

import static com.googlecode.objectify.ObjectifyService.ofy;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

//http://localhost:8888/_ah/api/crowdfoodapi/v1/


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
        ObjectifyService.register(Rating.class);
    }
	
	@ApiMethod(name="getUser", path="get_user", httpMethod=HttpMethod.GET)
	public User getUser(@Named("id") String id) { //GET from DB to frontend
		//User temp = ofy().load().type(User.class).id(id).get();
		//System.out.println("String Id = " + temp.getId() + " and name is " + temp.getUserName());
		//System.out.println("Token = " + temp.getToken() + " and payment is " + temp.getPaymentOption());
		//return temp;
		return ofy().load().type(User.class).id(id).get();
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
		return ofy().load().type(Food.class).id(id).get();
	}
	
	@ApiMethod(name="postFood", path="post_food", httpMethod=HttpMethod.POST)
	public void postFood(Food food) { //POST from frontend to DB
		ofy().save().entity(food).now();   // synchronous
	}
	@ApiMethod(name="getRating", path="get_rating", httpMethod=HttpMethod.GET)
	public Rating getRating(@Named("id") String id) { //GET from DB to frontend
		return ofy().load().type(Rating.class).id(id).get(); //return User
	}
	@ApiMethod(name="postRating", path="post_rating", httpMethod=HttpMethod.POST)
	public void postRating(Rating rating) { //GET from DB to frontend
		ofy().save().entity(rating).now(); //return User
	}
	
	@ApiMethod(name="allFood", path="all_food", httpMethod=HttpMethod.GET)
	public List<Food> allFood() { //GET from DB to frontend
		return ObjectifyService.ofy().load().type(Food.class).list();
	}

}
