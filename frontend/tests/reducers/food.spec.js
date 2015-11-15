import {
  FOOD_REQUEST, FOOD_RECEIVE,
  NEARBY_FOODS_RECEIVE,
} from 'constants/food';

import { foods } from 'reducers/food';

describe('Food Reducers and Selectors', function () {
  describe('(Reducer) foods', function () {
    it('should add and start fetching a previously unseen food on FOOD_REQUEST', function () {
      const initialState = {
        1: {
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
      };
      const finalState = {
        1: {
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          fetching: true,
        },
      };
      expect(foods(initialState, {type: FOOD_REQUEST, id: 2})).to.deep.equal(finalState);
    });
    it('should start fetching a previously seen food on FOOD_REQUEST', function () {
      const initialState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2',
          description: 'Food 2 Desc',
          fetching: false,
          owner: '4598',
        },
      };
      const finalState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: true,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2',
          description: 'Food 2 Desc',
          fetching: false,
          owner: '4598',
        },
      };
      expect(foods(initialState, {type: FOOD_REQUEST, id: 1})).to.deep.equal(finalState);
    });
    it('should stop fetching and add a previously unseen food on FOOD_RECEIVE', function () {
      const initialState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
      };
      const finalState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2',
          description: 'Food 2 Desc',
          owner: '4598',
          fetching: false,
        },
      };
      const foodRequestPayload = {
        id: 2,
        name: 'Food 2',
        description: 'Food 2 Desc',
        owner: {
          id: '4598',
          name: 'Bruce Banner',
        },
      };
      expect(foods(initialState, { type: FOOD_RECEIVE, id: 2, payload: foodRequestPayload })).to.deep.equal(finalState);
    });
    it('should stop fetching a previously seen food on FOOD_RECEIVE', function () {
      const initialState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2',
          description: 'Food 2 Desc',
          owner: '4598',
          fetching: true,
        },
      };
      const finalState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2',
          description: 'Food 2 Desc',
          owner: '4598',
          fetching: false,
        },
      };
      const foodRequestPayload = {
        id: 2,
        name: 'Food 2',
        description: 'Food 2 Desc',
        owner: {
          id: '4598',
          name: 'Bruce Banner',
        },
      };
      expect(foods(initialState, {
        type: FOOD_RECEIVE,
        id: 2,
        payload: foodRequestPayload,
      })).to.deep.equal(finalState);
    });
    it('should appropriately add or update foods on NEARBY_FOODS_RECEIVE', function () {
      const initialState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2',
          description: 'Food 2 Desc',
          owner: '4598',
          fetching: false,
        },
      };
      const  finalState = {
        1: {
          id: 1,
          name: 'Food 1',
          description: 'Food 1 Desc',
          fetching: false,
          owner: '1232',
        },
        2: {
          id: 2,
          name: 'Food 2A',
          description: 'Food 2 Desc',
          owner: '4598',
          fetching: false,
        },
        3: {
          id: 3,
          name: 'Food 3',
          description: 'Food 3 Desc',
          owner: '3296',
          fetching: false,
        },
      };

      const nearbyFoodsPayload = [
        {
          id: 2,
          name: 'Food 2A',
          description: 'Food 2 Desc',
          owner: {
            id: '4598',
            name: 'Bruce Banner',
          },
        },
        {
          id: 3,
          name: 'Food 3',
          description: 'Food 3 Desc',
          owner: {
            id: '3296',
            name: 'Peter Parker',
          },
        },
      ];
      expect(foods(initialState, {
        type: NEARBY_FOODS_RECEIVE,
        payload: nearbyFoodsPayload,
      })).to.deep.equal(finalState);
    });
  });
});
