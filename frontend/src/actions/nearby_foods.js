import fetch from 'isomorphic-fetch';

import {
    NEARBY_FOODS_REQUEST, NEARBY_FOODS_RECEIVE, NEARBY_FOODS_ERROR,
} from 'constants/food';

function requestNearbyFoods () {
  return {
    type: NEARBY_FOODS_REQUEST,
  };
}

function receiveNearbyFoods (payload) {
  return {
    type: NEARBY_FOODS_RECEIVE,
    payload,
  };
}

function nearbyFoodsError (error) {
  return {
    type: NEARBY_FOODS_ERROR,
    error,
  };
}

export function getNearbyFoods (location) { // eslint-disable-line no-unused-vars
  return (dispatch, getState) => {
    const state = getState();
    const alreadyFetching = state.nearbyFoods.fetching;
    if (!alreadyFetching) {
      dispatch(requestNearbyFoods());
      return fetch(`https://endpoints-test-1109.appspot.com/_ah/api/crowdfoodapi/v1/all_food`)
      .then(req => req.json())
      .then(json => json.items)
      .then(items => dispatch(receiveNearbyFoods(items)))
      .catch(error => dispatch(nearbyFoodsError(error)));
    }
  };
}

