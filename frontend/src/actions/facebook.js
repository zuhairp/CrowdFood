export const FACEBOOK_LOGIN_REQUEST = 'FACEBOOK_LOGIN_REQUEST';
export const FACEBOOK_LOGIN_RECEIVE = 'FACEBOOK_LOGIN_RECEIVE';
export const FACEBOOK_LOGIN_ERROR   = 'FACEBOOK_LOGIN_ERROR';

function loginFacebookStarted() {
  return {
    type: FACEBOOK_LOGIN_REQUEST,
  };
}

function loginFacebookComplete(payload) {
  return {
    type: FACEBOOK_LOGIN_RECEIVE,
    payload,
  };
}

function loginFacebookError(error) {
  return {
    type: FACEBOOK_LOGIN_ERROR,
    error,
  };
}

export function loginFacebook() {
  return (dispatch, getState) => { // eslint-disable-line no-unused-vars
    dispatch(loginFacebookStarted());
    return new Promise((resolve, reject) => {  // eslint-disable-line no-unused-vars
      window.FB.login((response) => {
        resolve(response);
      }, {scope: 'email'});
    })
    .then(response => loginFacebookComplete(response))
    .catch(error => loginFacebookError(error));
  };
}
