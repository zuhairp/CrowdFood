import { NEARBY_FOODS_RECEIVE } from 'actions/nearby_foods';

export function users(state = {}, action){
	switch(action.type){
	case NEARBY_FOODS_RECEIVE:
		let user_map = {};
		for(let food of action.payload){
			const { owner } = food;
			user_map[owner.id] = owner;
		}
		return {
			...state,
			...user_map,
		};
	default:
		return state;
	}
}