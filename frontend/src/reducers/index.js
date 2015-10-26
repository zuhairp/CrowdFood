import { combineReducers } from 'redux';

import { routerStateReducer } from 'redux-router';

import { foods, nearbyFoods } from './food';

export default combineReducers({
  foods,
  nearbyFoods,
  router: routerStateReducer,
});
