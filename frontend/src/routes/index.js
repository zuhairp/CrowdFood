import React       from 'react';
import { Route, IndexRoute }   from 'react-router';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView';
import BuyFoodItemView from 'views/BuyFoodItemView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route name='buy-food' path='/food/:foodId' component={BuyFoodItemView} />
  </Route>
);
