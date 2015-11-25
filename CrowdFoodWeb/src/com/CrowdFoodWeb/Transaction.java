package com.CrowdFoodWeb;

public class Transaction {
	private String buyerID;
	private String chefID;
	private String foodID;
	
	private int quantity;
	private int price;
	private String status;
	
	private String id;
	
	public Transaction(){
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}


	///Getters and Setters
	public String getBuyer() {
		return buyerID;
	}

	public void setBuyer(User buyer) {
		this.buyerID = buyer.getId();
	}

	public String getChef() {
		return chefID;
	}

	public void setChef(User chef) {
		this.chefID = chef.getId();
	}

	public String getFood() {
		return foodID;
	}

	public void setFood(Food food) {
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
