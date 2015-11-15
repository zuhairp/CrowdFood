import { combineReducers } from 'redux';

import { routerStateReducer } from 'redux-router';

import { foods, nearbyFoods } from './food';
import { facebookSDK } from './facebook';
import { users, loggedInUser } from './users';

export default combineReducers({
  foods,
  nearbyFoods,
  users,
  facebookSDK,
  loggedInUser,
  router: routerStateReducer,
});
