package com.CrowdFoodWeb;

import com.googlecode.objectify.annotation.Id;

public class Transaction {
	private String buyerID;
	private String chefID;
	private Long foodID;
	
	private int quantity;
	private int price;
	private String status;
	
	@Id private long id;
	
	public Transaction(){
		
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	///Getters and Setters
	public String getBuyerId() {
		return buyerID;
	}

	public void setBuyerId(User buyer) {
		this.buyerID = buyer.getId();
	}

	public String getChefId() {
		return chefID;
	}

	public void setChefId(User chef) {
		this.chefID = chef.getId();
	}

	public long getFoodId() {
		return foodID;
	}

	public void setFoodId(Food food) {
		this.foodID = food.getId();
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
