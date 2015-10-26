import { combineReducers } from 'redux';

import { foods, nearbyFoods } from './food';

export default combineReducers({
  foods,
  nearbyFoods,
});
