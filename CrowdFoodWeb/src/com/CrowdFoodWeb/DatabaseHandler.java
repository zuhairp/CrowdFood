package com.CrowdFoodWeb;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.Date;
import java.util.List;

import javax.inject.Named;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.response.NotFoundException;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Result;
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
	
	@ApiMethod(name="getUser", path="user/{id}", httpMethod=HttpMethod.GET)
	public User getUser(@Named("id") String id) throws NotFoundException { //GET from DB to frontend		
		checkIdExists(User.class, id);
		return ofy().load().type(User.class).id(id).safeGet();
	}
	
	@ApiMethod(name="postUser", path="user", httpMethod=HttpMethod.POST)
	public User postUser(User user) { //POST from frontend to DB
		Key<User> keyedUser = ofy().save().entity(user).now();   // synchronous
		return ofy().load().key(keyedUser).safeGet();
	}
	
	
	@ApiMethod(name="getFood", path="food/{id}", httpMethod=HttpMethod.GET)
	public Food getFood(@Named("id") Long id) throws NotFoundException { //GET from DB to frontend
		checkIdExists(Food.class, id);
		return ofy().load().type(Food.class).id(id).get();
	}
	
	@ApiMethod(name="postFood", path="food", httpMethod=HttpMethod.POST)
	public Food postFood(Food food) { //POST from frontend to DB
		food.setPostDate(new Date());
		Key<Food> keyedFood = ofy().save().entity(food).now();   // synchronous
		return ofy().load().key(keyedFood).safeGet();
	}
	@ApiMethod(name="deleteFood", path="food/{id}", httpMethod=HttpMethod.DELETE)
	public void removeFood(@Named("id") Long id) throws NotFoundException {
		checkIdExists(Food.class, id);
		ofy().delete().type(Food.class).id(id).now();
	}
	
	@ApiMethod(name="allFood", path="all_food", httpMethod=HttpMethod.GET)
	public List<Food> allFood() { //GET from DB to frontend
		return ObjectifyService.ofy().load().type(Food.class).list();
	}
	
	
	@ApiMethod(name="getRating", path="get_rating", httpMethod=HttpMethod.GET)
	public Rating getRating(@Named("id") String id) { //GET from DB to frontend
		return ofy().load().type(Rating.class).id(id).get(); //return User
	}
	@ApiMethod(name="postRating", path="post_rating", httpMethod=HttpMethod.POST)
	public void postRating(Rating rating) { //GET from DB to frontend
		ofy().save().entity(rating).now(); //return User
	}
	
	
	
	
	private void checkIdExists(Class<?> type, Long id) throws NotFoundException{
		try {
			ofy().load().type(type).id(id).safeGet();
		} catch (com.googlecode.objectify.NotFoundException e){
			throw new NotFoundException("Could not find " + type.getName() + " with ID: "+id);
		}
	}
	private void checkIdExists(Class<?> type, String id) throws NotFoundException{
		try {
			ofy().load().type(type).id(id).safeGet();
		} catch (com.googlecode.objectify.NotFoundException e){
			throw new NotFoundException("Could not find " + type.getName() + " with ID: "+id);
		}
	}

}
