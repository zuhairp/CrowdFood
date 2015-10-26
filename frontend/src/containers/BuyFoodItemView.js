import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Grid, Row, Col, Input, Button }     from 'react-bootstrap';

import FoodOrderForm from 'components/FoodOrderForm';

const actionCreators = {
};

const mapStateToProps = (state) => ({
  food: state.foods[state.router.params.foodId],
  routerState: state.router,
  owner: state.users[state.foods[state.router.params.foodId].owner],
});
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

  render () {
    console.log(this.props);
    const { name, description, post_date, expiration_date, quantity, price } = this.props.food;
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
