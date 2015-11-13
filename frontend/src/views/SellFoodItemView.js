import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Input, Button } from 'react-bootstrap';

import { selectLoggedInUser } from 'reducers/users';


const actionCreators = {
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: selectLoggedInUser(state),
  }
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class SellFoodItemView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
  }

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      file: null,
      expirationDate: '',
      location: '',  
    };
  }

  submitForm(){
    const { loggedInUser } = this.props;  
    const { name, description, file, expirationDate, location } = this.state;

    const food_to_sell = {
      name,
      description,
      file,
      expirationDate,
      location,
      chef: loggedInUser.id,
    };

    console.log(food_to_sell);

  }

  render() {
    return (
      <div>
        <div style={{marginLeft: "25%", width:"50%"}}>
          <form>
            <Input 
              type="text" label="Name of Food" 
              value={this.state.name} 
              onChange={(e) => this.setState({name: e.target.value})}
            />
            <Input 
              type="textarea" 
              label="Description" 
              placeholder="Make it sound yummy!" 
              value={this.state.description}
              onChange={(e) => this.setState({description: e.target.value})}
            />  
            <Input type="file" label="Image" />

            <Input 
              type="text" 
              label="Expiration Date" 
              placeholder="MM/DD" 
              value={this.state.expirationDate} 
              onChange={(e) => this.setState({expirationDate: e.target.value})}
            />
            <Input 
              type="text" 
              label="Location" 
              placeholder="Latitude, Longitude" 
              value={this.state.location}
              onChange={(e) => this.setState({location: e.target.value })}
            />

            <Button bsSize="large" bsStyle="primary" onClick={this.submitForm.bind(this)}>Post Food</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellFoodItemView);
