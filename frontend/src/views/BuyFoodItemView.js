import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Grid, Row, Col }     from 'react-bootstrap';

import FoodOrderForm from 'components/FoodOrderForm';

import { getFoodIfNecessary } from 'actions/food';
import { getUser } from 'actions/users';

const actionCreators = {
  getFoodIfNecessary,
  getUser,
};

const mapStateToProps = (state) => {
  let owner = undefined;
  if (state.foods[state.router.params.foodId] !== undefined) {
    owner = state.users['' + state.foods[state.router.params.foodId].chef];
  }
  return {
    food: state.foods[state.router.params.foodId],
    routerState: state.router,
    owner: owner,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch),
});

export class BuyFoodItemView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    food: React.PropTypes.object,
    owner: React.PropTypes.object,
  }

  constructor () {
    super();
  }

  componentDidMount () {
    const { getFoodIfNecessary, getUser } = this.props.actions; // eslint-disable-line no-shadow
    getFoodIfNecessary(this.props.routerState.params.foodId) // eslint-disable-line
    .then(action => { console.log(action); getUser(action.payload.chef); });
  }

  render () {
    if (this.props.food === undefined || this.props.owner === undefined) {
      return (
        <p> Loading... </p>
      );
    }
    const { name, description, post_date : postDate, expiration_date : expirationDate, quantity, price } = this.props.food;
    const { userName : seller, rating } = this.props.owner;
    return (
      <div className='container text-center'>
        <Grid>
          <Row>
          	<Col xs={6}>
          		<Row>
          			<Col xs={12}><img src='http://placehold.it/300x300' /></Col>
          		</Row>
          		<Row>
                {
                  <FoodOrderForm quantity={quantity} price={price} />
                }
          		</Row>
          	</Col>
          	<Col xs={6}>
          		<p style={{fontWeight:'bold'}}> {name} </p>
          		<p>
                  { description }
          		</p>
          		<p>
          			Prepared by Chef { seller } ({ rating } stars)
          		</p>
          		<p>
          			Post Date: { postDate }
          		</p>
          		<p>
          			Expires: { expirationDate }
          		</p>
          	</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyFoodItemView);
