export const FACEBOOK_INIT_START = 'FACEBOOK_INIT_START';
export const FACEBOOK_INIT_COMPLETE = 'FACEBOOK_INIT_COMPLETE';

function facebookInitStarted() {
  return {
    type: FACEBOOK_INIT_START,
  };
}

function facebookInitCompleted() {
  return {
    type: FACEBOOK_INIT_COMPLETE,
  };
}

export function facebookInit() {
  return (dispatch, getState) => {
    const { facebookSDK } = getState();
    const { status } = facebookSDK;

    if(status !== ''){  // If status is empty string, that means there was no attempt to init...
      return;
    }
    dispatch(facebookInitStarted());  // ...so let's do that

    window.fbAsyncInit = function() {
      FB.init({
        //appId      : '813794818743608',
        appId      : '819206941535729',
        xfbml      : true,
        version    : 'v2.5'
      });
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        dispatch(facebookInitCompleted()); 
    }(document, 'script', 'facebook-jssdk'));
  }
}


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
    const { facebookSDK } = getState();
    const { status } = facebookSDK;
    if(status !== FACEBOOK_INIT_START){
      return new Promise((resolve, reject) => {  // eslint-disable-line no-unused-vars
        window.FB.login((response) => {
          if(response.authResponse) resolve(response.authResponse.userID);
          else reject(response);
        }, {scope: 'email'});
      })
      .then(response => dispatch(loginFacebookComplete(response)))
      .catch(error => dispatch(loginFacebookError(error)));
    }
  };
}

export const FACEBOOK_LOGOUT_REQUEST = 'FACEBOOK_LOGOUT_REQUEST';
export const FACEBOOK_LOGOUT_COMPLETE = 'FACEBOOK_LOGOUT_COMPLETE';

function logoutFacebookStarted() {
  return {
    type: FACEBOOK_LOGOUT_START,
  };
}

function logoutFacebookFinished() {
  return {
    type: FACEBOOK_LOGOUT_COMPLETE,
  };
}

export function logoutFacebook() {
  return (dispatch, getState) => {
    dispatch(logoutFacebookStarted());
    return new Promise((resolve, reject) => {
        FB.logout( () => resolve('dummy argument') );
    })
    .then(() => dispatch(logoutFacebookFinished()))
  };
}