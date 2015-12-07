import fetch from 'isomorphic-fetch';

import {
USER_REQUEST, USER_RECEIVE, USER_ERROR,
} from 'constants/users';

function requestUser (foodId) {
  return {
    type: USER_REQUEST,
    payload: foodId,
  };
}

function receivedUser (payload) {
  return {
    type: USER_RECEIVE,
    payload,
  };
}

function userError (id, error) {
  return {
    type: USER_ERROR,
    id,
    error,
  };
}

export function getUser (userId) {
  return (dispatch, getState) => {
    const state = getState();
    const user = state.users[userId];
    const alreadyFetching = (user === undefined) ? false : user.fetching;
    if (!alreadyFetching) {
      dispatch(requestUser(userId));
      const url = `https://endpoints-test-1109.appspot.com/_ah/api/crowdfoodapi/v1/user/${userId}`;
      return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivedUser(json)))
      .catch(error => dispatch(userError(userId, error)));
    }

    return Promise.resolve();
  };
}
