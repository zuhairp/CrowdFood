package com.CrowdFoodWeb;

//import com.google.appengine.api.users.User;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class User {
	private Double Rating;
	private String userName;
	private String paymentOption;
	@Id private String id;
	private String[] friendIDs;
	private String token;
	
	////Constructor
	public User() {
		
	}
	
	public User(String id){
		this.id = id;
	}
	
	public User(String id, String name,
			String token){ //Pass in ID from Facebook API - Should be a numeric string
		this.id = id;
		this.userName = name;
		this.token = token;
	}
	
	
	//////getters and Setters
	public Double getRating() {
		return Rating;
	}
	
	public void setRating(Double rating) {
		Rating = rating;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPaymentOption() {
		return paymentOption;
	}
	
	public void setPaymentOption(String paymentOption) {
		this.paymentOption = paymentOption;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getToken() {
		return token;
	}
	
	/////Other functions
	public void initiateTransaction(){
		
	}
	public void terminateTransaction(){
		
	}
	
	
	
	
}
