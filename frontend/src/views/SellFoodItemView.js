import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Input, Button } from 'react-bootstrap';

import { sellFood } from 'actions/food';
import { selectLoggedInUser } from 'reducers/users';


const actionCreators = {
  postFood: sellFood,
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: selectLoggedInUser(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch),
});

export class SellFoodItemView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    loggedInUser: React.PropTypes.object,
  }

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      file: null,
      expirationDate: '',
      location: '',
      quantity: '',
      price: '',
    };
  }

  submitForm () {
    const { loggedInUser } = this.props;
    const { name, description, file, expirationDate, location, quantity, price } = this.state;

    const [ latitude, longitude ] = location.split(',');

    const foodToSell = {
      name,
      description,
      // file,
      // expirationDate,
      latitude,
      longitude,
      quantity,
      price,
      chef: loggedInUser.id,
    };

    const { postFood } = this.props.actions;
    postFood(foodToSell);
    this.props.history.pushState('/'); // eslint-disable-line
  }

  render () {
    return (
      <div>
        <div style={{marginLeft: '25%', width:'50%'}}>
          <form>
            <Input
              type='text' label='Name of Food'
              value={this.state.name}
              onChange={(event) => this.setState({name: event.target.value})}
            />
            <Input
              type='textarea'
              label='Description'
              placeholder='Make it sound yummy! Also include ways to contact you as well as how big your serving sizes are'
              value={this.state.description}
              onChange={(event) => this.setState({description: event.target.value})}
            />
            <Input type='file' label='Image' />

            <Input
              type='text'
              label='Expiration Date'
              placeholder='MM/DD'
              value={this.state.expirationDate}
              onChange={(event) => this.setState({expirationDate: event.target.value})}
            />
            <Input
              type='text'
              label='Quantity'
              placeholder='How many servings are you selling?'
              value={this.state.quantity}
              onChange={(event) => this.setState({quantity: event.target.value })}
            />
            <Input
              type='text'
              label='Price per serving'
              placeholder=''
              addonBefore='$'
              value={this.state.price}
              onChange={(event) => this.setState({price: event.target.value })}
            />
            <Input
              type='text'
              label='Location'
              placeholder='Latitude, Longitude'
              value={this.state.location}
              onChange={(event) => this.setState({location: event.target.value })}
            />

            <Button bsSize='large' bsStyle='primary' onClick={this.submitForm.bind(this)}>Post Food</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellFoodItemView);
