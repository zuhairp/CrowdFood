import fetch from 'isomorphic-fetch';

import {
    FOOD_REQUEST, FOOD_RECEIVE, FOOD_ERROR,
} from 'constants/food';

function requestFood (foodId) {
  return {
    type: FOOD_REQUEST,
    id: foodId,
  };
}

function receivedFood (payload) {
  return {
    type: FOOD_RECEIVE,
    payload,
  };
}

function foodError (id, error) {
  return {
    type: FOOD_ERROR,
    error,
  };
}

export function getFood (foodId) {
  return (dispatch, getState) => {
    const state = getState();
    const food = state.foods[foodId];
    const alreadyFetching = (food === undefined) ? false : food.fetching;
    if (!alreadyFetching) {
      dispatch(requestFood(foodId));
      const url = `https://endpoints-test-1109.appspot.com/_ah/api/crowdfoodapi/v1/food/${foodId}`;
      return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivedFood(json)))
      .catch(error => dispatch(foodError(error)));
    }
    return Promise.resolve();
  };
}

export function getFoodIfNecessary (foodId) {
  return (dispatch, getState) => {
    const state = getState();
    const food = state.foods[foodId];
    if (food === undefined) {
      return dispatch(getFood(foodId));
    }
    return Promise.resolve();
  };
}
