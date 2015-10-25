package com.CrowdFoodWeb;

import java.util.*;


public class Food {
	private String name;
	private String description;
	private String pictureURL;
	private Date postDate;
	private Date expirationDate;
	private User chef;
	private String paymentOption;
	private String status;
	private String id;
	private String location; //This will not be a string but will be a google maps location.
						//Maybe it will be a GPS coordinate
	
	
	///Constructor
	public Food(String name){
		this.name = name;
		
		
	}
	
	
	////Getters and Setters
	public String getName(){
		return this.name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPictureURL() {
		return pictureURL;
	}

	public void setPictureURL(String pictureURL) {
		this.pictureURL = pictureURL;
	}

	public Date getPostDate() {
		return postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}

	public String getPaymentOption() {
		return paymentOption;
	}

	public void setPaymentOption(String paymentOption) {
		this.paymentOption = paymentOption;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
	
	
}
