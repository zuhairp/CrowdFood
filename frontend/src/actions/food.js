import {
    FOOD_REQUEST, FOOD_RECEIVE, FOOD_ERROR,
    FOOD_POSTING, FOOD_POSTED, FOOD_POST_ERROR,
} from 'constants/food';

import { EXAMPLE_FOODS, EXAMPLE_RESPONSE_TIME_MS } from 'utils/example_responses';

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

function foodError (error) {
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

      // Simulate a network request
      return new Promise((resolve, reject) => setTimeout(() => {
        const response = EXAMPLE_FOODS[foodId];
        return (response === undefined) ? reject({error: { status: 404, message: 'Food does not exist'}}) : resolve(response);
      }, EXAMPLE_RESPONSE_TIME_MS))
      .then(json => dispatch(receivedFood(json)))
      .catch(error => dispatch(foodError(error)));
    }
  };
}

export function getFoodIfNecessary (foodId) {
  return (dispatch, getState) => {
    const state = getState();
    const food = state.foods[foodId];
    if (food === undefined) {
      return dispatch(getFood(foodId));
    }
  };
}

function postingFood (payload) {
  return {
    type: FOOD_POSTING,
    payload,
  };
}

function postFood (payload) {
  return {
    type: FOOD_POSTED,
    payload,
  };
}

function postFoodError (error) {
  return {
    type: FOOD_POST_ERROR,
    error,
  };
}

export function sellFood (payload) {
  return (dispatch, getState) => {
    dispatch(postingFood(payload));
    return new Promise((resolve, reject) => setTimeout(() => { // eslint-disable-line
      payload.owner = {
        id: payload.chef,
        name: getState().users[payload.chef],
      };
      payload.id = Math.round(100000 * Math.random());
      resolve(payload);
    }, 10))
    .then(json => dispatch(postFood(json)))
    .catch(error => dispatch(postFoodError(error)));
  };
}
