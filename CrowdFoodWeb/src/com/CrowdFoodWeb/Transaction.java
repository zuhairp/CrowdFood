package com.CrowdFoodWeb;

public class Transaction {
	private User buyer;
	private User chef;
	private Food food;
	private int quantity;
	private int price;
	private String status;
	
	private String id; // This should change to fb API default
	
	public Transaction(){
		
	}

	///Getters and Setters
	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	public User getChef() {
		return chef;
	}

	public void setChef(User chef) {
		this.chef = chef;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
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
