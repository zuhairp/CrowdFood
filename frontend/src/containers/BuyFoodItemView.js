import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Grid, Row, Col, Input, Button }     from 'react-bootstrap';

import FoodOrderForm from 'components/FoodOrderForm';

// Normally you'd import your action creators, but I don't want to create
// a file that you're just going to delete anyways!
const actionCreators = {
  increment : () => ({ type : 'COUNTER_INCREMENT' })
};

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});
export class BuyFoodItemView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  constructor () {
    super();
  }

  render () {
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
          		<p> Tacos </p>
          		<p>
          			Made too many tacos for lunch. Its just meat and a taco shell, bring your own toppings
          		</p>
          		<p>
          			Prepared by Chef Alex Jones (4 stars)
          		</p>
          		<p>
          			Post Date: Monday, September 28
          		</p>
          		<p>
          			Expires: Thursday, October 1
          		</p>
          	</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyFoodItemView);
