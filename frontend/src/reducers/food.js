import {
  FOOD_REQUEST, FOOD_RECEIVE,
  NEARBY_FOODS_REQUEST, NEARBY_FOODS_RECEIVE, NEARBY_FOODS_ERROR,
} from 'constants/food';

function normalizeFood (food) {
  return {
    ...food,
    owner: food.owner.id,
  };
}

export function foods (state = {}, action) {
  switch (action.type) {
  case FOOD_REQUEST:
    return {
      ...state,
      [action.id] : {...state[action.id], fetching: true},
    };
  case FOOD_RECEIVE:
    const normalizedReceivedFood = normalizeFood(action.payload);
    normalizedReceivedFood.fetching = false;
    return {
      ...state,
      [action.payload.id] : normalizedReceivedFood,
    };
  case NEARBY_FOODS_RECEIVE:
    const foodMap = {};
    for (const food of action.payload) {
      const normalizedNearbyFood = normalizeFood(food);
      normalizedNearbyFood.fetching = false;
      foodMap[food.id] = normalizedNearbyFood;
    }
    return {
      ...state,
      ...foodMap,
    };
  default:
    return state;
  }
}

export function nearbyFoods (state = {foods: [], fetching:false}, action) {
  switch (action.type) {
  case NEARBY_FOODS_REQUEST:
    return {
      ...state,
      fetching: true,
    };
  case NEARBY_FOODS_RECEIVE:
    const nearby = [];
    for (const food of action.payload) {
      nearby.push(food.id);
    }
    return {
      ...state,
      foods: nearby,
      fetching: false,
    };
  case NEARBY_FOODS_ERROR:
    return {
      ...state,
      fetching: false,
    };
  default:
    return state;
  }
}
