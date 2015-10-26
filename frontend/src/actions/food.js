import { EXAMPLE_FOODS, EXAMPLE_RESPONSE_TIME_MS } from 'utils/example_responses.js';

export const FOOD_REQUEST = 'FOOD_REQUEST';
export const FOOD_RECEIVE = 'FOOD_RECEIVE';
export const FOOD_ERROR   = 'FOOD_ERROR';

function requestFood(foodId){
	return {
		type: FOOD_REQUEST,
		id: foodId,
	};
}

function receivedFood(payload){
	return {
		type: FOOD_RECEIVE,
		payload,
	};
}

function foodError(error){
	return {
		type: FOOD_ERROR,
		error,
	}
``}

export function getFood(foodId){
	return (dispatch, getState) => {
		const state = getState();
		const food = state.foods[foodId];
		const alreadyFetching = (food === undefined) ? false : food.fetching;
		if(!alreadyFetching){
			dispatch(requestFood(foodId));	

			// Simulate a network request
			return new Promise((resolve, reject) => setTimeout(() => {
				const response = EXAMPLE_FOODS[foodId];
				return (response === undefined) ? reject({error: { status: 404, message: 'Food does not exist'}}) : resolve(response);
			}, EXAMPLE_RESPONSE_TIME_MS))
			.then(json => dispatch(receivedFood(json)))
			.catch(error => dispatch(foodError(error)));
		}
	};
}

export function getFoodIfNecessary(foodId){
	return (dispatch, getState) => {
		const state = getState();
		const food = state.foods[foodId];
		if(food === undefined){
			return dispatch(getFood(foodId));
		}
	}	
}