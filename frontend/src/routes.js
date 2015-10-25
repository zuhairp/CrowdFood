import React       from 'react';
import { Route }   from 'react-router';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'containers/HomeView';
import BuyFoodItemView from 'containers/BuyFoodItemView';

export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={HomeView} />
    <Route name='buy-food' path='/food' component={BuyFoodItemView} />
  </Route>
);
