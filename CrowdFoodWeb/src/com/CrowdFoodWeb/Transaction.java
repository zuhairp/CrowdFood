package com.CrowdFoodWeb;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Transaction {
	private String buyerID;
	private String chefID;
	private Long foodID;
	
	private int quantity;
	private int price;
	private String status = "pending"; // "pending", "complete"
	
	@Id private Long id;
	
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

	public void setBuyerId(String buyerId) {
		this.buyerID = buyerId;
	}

	public String getChefId() {
		return chefID;
	}

	public void setChefId(String chefId) {
		this.chefID = chefId;
	}

	public long getFoodId() {
		return foodID;
	}

	public void setFoodId(long foodId) {
		this.foodID = foodId;
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
