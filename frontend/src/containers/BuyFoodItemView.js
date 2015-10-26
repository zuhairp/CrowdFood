import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Grid, Row, Col, Input, Button }     from 'react-bootstrap';

import FoodOrderForm from 'components/FoodOrderForm';

import { getFoodIfNecessary } from 'actions/food';

const actionCreators = {
  getFoodIfNecessary,
};

const mapStateToProps = (state) => {
  let owner = undefined;
  if(state.foods[state.router.params.foodId] !== undefined){
    owner = state.users[state.foods[state.router.params.foodId].owner];
  }
  return {
    food: state.foods[state.router.params.foodId],
    routerState: state.router,
    owner: owner,
  }
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class BuyFoodItemView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
  }

  constructor () {
    super();
  }

  componentDidMount() {
    const { getFoodIfNecessary } = this.props.actions;
    getFoodIfNecessary(this.props.routerState.params.foodId);
  }

  render() {
    if(this.props.food === undefined || this.props.owner === undefined){
      return (
        <p> Loading... </p>
      );
    }
    const { name, description, post_date, expiration_date, quantity, price, owner } = this.props.food;
    const { name : seller, rating } = this.props.owner;
    return (
      <div className='container text-center'>
        <Grid>
          <Row>
          	<Col xs={6}>
          		<Row>
          			<Col xs={12}><img src="http://placehold.it/300x300" /></Col>
          		</Row>
          		<Row>
                <FoodOrderForm quantity={quantity} price={price} />
          		</Row>
          	</Col>
          	<Col xs={6}>
          		<p> {name} </p>
          		<p>
                  { description }
          		</p>
          		<p>
          			Prepared by Chef { seller } ({ rating } stars)
          		</p>
          		<p>
          			Post Date: { post_date }
          		</p>
          		<p>
          			Expires: { expiration_date }
          		</p>
          	</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyFoodItemView);
