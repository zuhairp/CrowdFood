import { FOOD_RECEIVE, NEARBY_FOODS_RECEIVE } from 'constants/food';
import {
 FACEBOOK_LOGIN_RECEIVE, 
 FACEBOOK_LOGOUT_COMPLETE, 
 FACEBOOK_USER_INFO_RECEIVED, 
 FACEBOOK_USER_INFO_REQUEST 
} from 'constants/facebook';

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
  case FACEBOOK_USER_INFO_REQUEST:
    return {
      ...state,
      [action.payload] : { fetching: true, },
    }
  case FACEBOOK_USER_INFO_RECEIVED:
    return {
      ...state,
      [action.payload.id] : { name: action.payload.name, id: action.payload.id, }
    }
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

export function selectLoggedInUser(state) { 
  return state.users[state.loggedInUser];
}

