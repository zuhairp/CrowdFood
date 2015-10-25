package com.CrowdFoodWeb;

public class Rating {
	Food food;
	Double quality;
	String id;
	String comment;
	
	
	public Rating(String id){
		this.id = id;
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
	public Food getFood() {
		return food;
	}
	
	
	
	
}
