import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Grid, Row, Col, Input, Button }     from 'react-bootstrap';

import FoodOrderForm from 'components/FoodOrderForm';

// Normally you'd import your action creators, but I don't want to create
// a file that you're just going to delete anyways!
const actionCreators = {
};

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  food: state.foods[state.router.params.foodId],
  routerState: state.router,
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
    const { name, description, owner, post_date, expiration_date, quantity, price } = this.props.food;
    return (
      <div className='container text-center'>
        <Grid>
          <Row>
          	<Col xs={6}>
          		<Row>
          			<Col xs={12}><img src="http://placehold.it/300x300" /></Col>
          		</Row>
          		<Row>
                <FoodOrderForm quantity={3} price={2} />
          		</Row>
          	</Col>
          	<Col xs={6}>
          		<p> {name} </p>
          		<p>
                  { description }
          		</p>
          		<p>
          			Prepared by Chef { owner } (4 stars)
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
