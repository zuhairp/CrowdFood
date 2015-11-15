import { FOOD_RECEIVE, NEARBY_FOODS_RECEIVE } from 'constants/food';
import {
 FACEBOOK_LOGIN_RECEIVE,
 FACEBOOK_LOGOUT_COMPLETE,
 FACEBOOK_USER_INFO_RECEIVED,
 FACEBOOK_USER_INFO_REQUEST,
} from 'constants/facebook';

import { users, loggedInUser, selectLoggedInUser } from 'reducers/users';

describe('Users Reducers and Selectors', function () {
  describe('(Reducer) users', function () {
    it('should add a previously unseen user on FOOD_RECEIVE', function () {
      const initialState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
      };
      const finalState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
        '45689321' : {
          id: '45689321',
          name: 'Allison Barb',
        },
      };

      const foodPayload = {
        name: 'Food',
        description: 'description',
        owner: {
          id: '45689321',
          name: 'Allison Barb',
        },
      };

      expect(users(initialState, {type: FOOD_RECEIVE, payload: foodPayload})).to.deep.equal(finalState);
    });
    it('should overwrite a previously seen user on FOOD_RECEIVE', function () {
      const initialState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
      };
      const finalState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Allison Barb',
        },
      };

      const foodPayload = {
        name: 'Food',
        description: 'description',
        owner: {
          id: '7891011',
          name: 'Allison Barb',
        },
      };
      expect(users(initialState, {
        type: FOOD_RECEIVE, payload: foodPayload,
      })).to.deep.equal(finalState);
    });
    it('should update seen users and overwrite unseen users on NEARBY_FOODS_RECEIVE', function () {
      const initialState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
      };
      const finalState = {
        '123456': {
          id: '123456',
          name: 'Tony Stark',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
        '45689321' : {
          id: '45689321',
          name: 'Allison Barb',
        },
      };
      const nearbyFoodsPayload = [
        {
          'name' : 'Food 1', description: 'Description 1',
          owner: {
            'id': '45689321',
            name: 'Allison Barb',
          },
        },
        {
          'name': 'Food 2', description: 'Description 2',
          owner: {
            'id': '123456',
            name: 'Tony Stark',
          },
        },
      ];
      expect(users(initialState, {
        type: NEARBY_FOODS_RECEIVE,
        payload: nearbyFoodsPayload,
      })).to.deep.equal(finalState);
    });
    it('should start fetching a user when FACEBOOK_USER_INFO_REQUEST', function () {
      const initialState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
      };
      const finalState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
        '45689321' : {
          fetching: true,
        },
      };
      expect(users(initialState, {
        type: FACEBOOK_USER_INFO_REQUEST,
        payload: '45689321',
      })).to.deep.equal(finalState);
    });
    it('should add a previously unseen user on FACEBOOK_USER_INFO_RECEIVED', function () {
      const initialState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
      };
      const finalState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
        '45689321' : {
          id: '45689321',
          name: 'Allison Barb',
        },
      };
      expect(users(initialState, {
        type: FACEBOOK_USER_INFO_RECEIVED,
        payload: {name: 'Allison Barb', id: '45689321'},
      })).to.deep.equal(finalState);
    });
    it('should update a previously seen user on FACEBOOK_USER_INFO_RECEIVED', function () {
      const initialState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
        '45689321' : {
          fetching: true,
        },
      };
      const finalState = {
        '123456': {
          id: '123456',
          name: 'John Smith',
        },
        '7891011': {
          id: '7891011',
          name: 'Bob Jones',
        },
        '45689321' : {
          id: '45689321',
          name: 'Allison Barb',
        },
      };
      expect(users(initialState, {
        type: FACEBOOK_USER_INFO_RECEIVED,
        payload: {name: 'Allison Barb', id: '45689321'},
      })).to.deep.equal(finalState);
    });
  });

  describe('(Reducer) loggedInUser', function () {
    it('should set the logged in user on FACEBOOK_LOGIN_RECEIVE', function () {
      expect(loggedInUser('', {
        type: FACEBOOK_LOGIN_RECEIVE,
        payload: '123456',
      })).to.equal('123456');
    });

    it('should clear the logged in user on FACEBOOK_LOGOUT_COMPLETE', function () {
      expect(loggedInUser('123456', {type: FACEBOOK_LOGOUT_COMPLETE })).to.equal('');
    });

    it('should do nothing on an invalid action', function () {
      expect(loggedInUser('123456', {})).to.equal('123456');
      expect(loggedInUser('', {})).to.equal('');
    });
  });

  describe('(Selctor) selectLoggedInUser', function () {
    it('should select the logged in user', function () {
      const state = {
        users: {
          '123456': {
            id: '123456',
            name: 'John Smith',
          },
          '7891011': {
            id: '7891011',
            name: 'Bob Jones',
          },
        },
        loggedInUser: '123456',
      };
      expect(selectLoggedInUser(state)).to.deep.equal({
        id: '123456',
        name: 'John Smith',
      });
    });
    it('should return undefined if no logged in user', function () {
      const state = {
        users: {
          '123456': {
            id: '123456',
            name: 'John Smith',
          },
          '7891011': {
            id: '7891011',
            name: 'Bob Jones',
          },
        },
        loggedInUser: '',
      };
      expect(selectLoggedInUser(state)).to.be.undefined;
    });
  });
});
