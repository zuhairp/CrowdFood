import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { getNearbyFoods }     from 'actions/nearby_foods';

import { Grid, Row, Col }     from 'react-bootstrap';

import SearchBar              from 'components/SearchBar';
import FoodInfoCard           from 'components/FoodInfoCard';

// Normally you'd import your action creators, but I don't want to create
// a file that you're just going to delete anyways!
const actionCreators = {
  getNearbyFoods,
};

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  nearby: state.nearbyFoods,
  foods: state.foods,
  routerState: state.router,
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});
export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
  }

  constructor () {
    super();
  }

  componentDidMount() {
    const latitude = 100;
    const longitude = 100;
    const { getNearbyFoods } = this.props.actions;
    getNearbyFoods({latitude, longitude});
  }

  renderNearbyFoods() {
    const { nearby, foods } = this.props; 
    return nearby.foods.map((food_id, index) => {
      const food = foods[food_id];
      return <FoodInfoCard {...food} key={food_id}/>
    });
  }

  render() {
    return (
      <div className='container text-center'>
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}><h2>CrowdFood</h2></Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={3}><SearchBar /></Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={4}><h4>What's cooking nearby</h4></Col>
          </Row>
          <Row>
            { this.renderNearbyFoods() }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
