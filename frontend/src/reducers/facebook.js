import { FACEBOOK_INIT_START, FACEBOOK_INIT_COMPLETE } from 'actions/facebook';

export function facebookSDK(state = { status: '', }, action) {
  switch(action.type) {
  case FACEBOOK_INIT_START:
  case FACEBOOK_INIT_COMPLETE:
    return {
      ...state,
      status : action.type,
    };
  default:
    return state;
  }
}

