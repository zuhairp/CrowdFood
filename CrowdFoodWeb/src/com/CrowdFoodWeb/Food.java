package com.CrowdFoodWeb;

import java.util.*;

import com.google.api.server.spi.types.DateAndTime;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Food {
	
	
	@Id private Long id;
	private String name;
	private double latitude;
	private double longtitude;
	private String description;
	private String pictureURL;
	private Date postDate;
	private Date expirationDate;
	private String chefId;
	private String paymentOption;
	private String status;
	
	private double price;
	private int quantity;
	
	private String location; //This will not be a string but will be a google maps location.
						//Maybe it will be a GPS coordinate
	
	
	///Constructor
	public Food(){
	}
	
	////Getters and Setters
	public String getName(){
		return this.name;
	}
	public String getChef(){
		return chefId;
	}
	public double getLatitude() {
		return latitude;
	}


	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongtitude() {
		return longtitude;
	}


	public void setLongtitude(double longtitude) {
		this.longtitude = longtitude;
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
	public Long getId(){
		return id;
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
	public void setChef(String userID){
		this.chefId = userID;
	}
	public void setId(Long id){
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	
	
	
	
}
