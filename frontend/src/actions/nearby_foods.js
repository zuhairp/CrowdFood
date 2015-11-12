import { EXAMPLE_NEARBY_FOODS_RESPONSE, EXAMPLE_RESPONSE_TIME_MS } from 'utils/example_responses.js';

export const NEARBY_FOODS_REQUEST = 'NEARBY_FOODS_REQUEST';
export const NEARBY_FOODS_RECEIVE = 'NEARBY_FOODS_RECEIVE';
export const NEARBY_FOODS_ERROR   = 'NEARBY_FOODS_ERROR';

function requestNearbyFoods() {
  return {
    type: NEARBY_FOODS_REQUEST,
  };
}

function receiveNearbyFoods(payload) {
  return {
    type: NEARBY_FOODS_RECEIVE,
    payload,
  };
}

function nearbyFoodsError(error) {
  return {
    type: NEARBY_FOODS_ERROR,
    error,
  };
}

export function getNearbyFoods(location) { // eslint-disable-line no-unused-vars
  return (dispatch, getState) => {
    const state = getState();
    const alreadyFetching = state.nearbyFoods.fetching;
    if (!alreadyFetching) {
      dispatch(requestNearbyFoods());
      // Simulate a network request
      return new Promise((resolve, reject) => setTimeout(() => resolve(EXAMPLE_NEARBY_FOODS_RESPONSE), EXAMPLE_RESPONSE_TIME_MS)) // eslint-disable-line no-unused-vars
      .then(req => req.foods)
      .then(json => dispatch(receiveNearbyFoods(json)))
      .catch(error => dispatch(nearbyFoodsError(error)));
    }
  };
}

