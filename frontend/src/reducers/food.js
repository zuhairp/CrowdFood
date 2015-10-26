import {
	NEARBY_FOODS_REQUEST, NEARBY_FOODS_RECEIVE, NEARBY_FOODS_ERROR 
} from 'actions/nearby_foods';

function normalizeFood(food){
	return {
		...food,
		owner: food.owner.id,	
	}	
}

export function foods(state={}, action){
	switch(action.type){
		case NEARBY_FOODS_RECEIVE:
			const foods = action.payload;
			let food_map = {};
			for(let food of foods){
				food_map[food.id] = normalizeFood(food);
			}
			return {
				...state,
				...food_map,
			};
		default:
			return state;	
	}	
}

export function nearbyFoods(state = {foods: [], fetching:false}, action) {
	switch(action.type){
	case NEARBY_FOODS_REQUEST:
		return {
			...state,
			fetching: true,
		};
	case NEARBY_FOODS_RECEIVE:
		let f = [];
		for(let food of action.payload){
			f.push(food.id);
		}
		return {
			...state,
			foods: f,
			fetching: false,
		}
	case NEARBY_FOODS_ERROR:
		return {
			...state,
			fetching: false,
		}
	default:
		return state;
	}
}