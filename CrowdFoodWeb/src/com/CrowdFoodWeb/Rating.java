package com.CrowdFoodWeb;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Rating {
	String foodId;
	String seller;
	Double quality;
	@Id private String id;
	String comment;
	
	
	public Rating(){
		
	}
	
	/////Getters and setters
	public Double getQuality() {
		return quality;
	}
	public void setQuality(Double quality) {
		this.quality = quality;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getFood() {
		return foodId;
	}
	public String getSeller() {
		return seller;
	}
	
	
	
	
}
