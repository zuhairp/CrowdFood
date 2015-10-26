import { combineReducers } from 'redux';

import { routerStateReducer } from 'redux-router';

import { foods, nearbyFoods } from './food';

import { users } from './users';

export default combineReducers({
  foods,
  nearbyFoods,
  users,
  router: routerStateReducer,
});
