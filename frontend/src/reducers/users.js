import { FOOD_RECEIVE } from 'actions/food';
import { NEARBY_FOODS_RECEIVE } from 'actions/nearby_foods';
import { FACEBOOK_LOGIN_RECEIVE, FACEBOOK_LOGOUT_COMPLETE } from 'actions/facebook';

export function users(state = {}, action) {
  switch (action.type) {
  case FOOD_RECEIVE:
    return {
      ...state,
      [action.payload.owner.id] : action.payload.owner,
    };
  case NEARBY_FOODS_RECEIVE:
    const userMap = {};
    for (const food of action.payload) {
      const { owner } = food;
      userMap[owner.id] = owner;
    }
    return {
      ...state,
      ...userMap,
    };
  default:
    return state;
  }
}

export function loggedInUser(state = '', action) {
  switch(action.type){
    case FACEBOOK_LOGIN_RECEIVE:
      return action.payload;
    case FACEBOOK_LOGOUT_COMPLETE:
      return '';
    default:
      return state;
  } 
}

