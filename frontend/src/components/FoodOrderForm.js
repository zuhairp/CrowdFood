import React from 'react';

import { Button, Input } from 'react-bootstrap';

export default class FoodOrderForm extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			value: props.price,
		};
	}

	handleQuantityChanged(event){
		const selected = parseFloat(event.target.value);
		this.setState({value: this.props.price * selected});
	}

	renderOptions(){
		const { quantity } = this.props;
		var quantityOptions = [];
		for(var i=0; i < quantity; i++){
			quantityOptions.push(
				<option value={i+1}>{i+1}</option>
			);
		}
		return quantityOptions;
	}	

	render() {
		const { price } = this.props;

		const parentContainerStyle = {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '300px',
			marginLeft: "25%",
		};
		const quantityContainerStyle = {
			display: 'flex',
			justifyContent: 'center',	
			alignItems: 'baseline',
		};
		const totalPriceContainerStyle = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flexEnd',
		};

		return (
			<div style={parentContainerStyle}>
				<div style={quantityContainerStyle}>
					<Input type="select" onChange={this.handleQuantityChanged.bind(this)}>
						{ this.renderOptions() }
					</Input>
					<p style={{paddingLeft:"5px"}}>at ${price.toFixed(2)} each</p>
				</div>
				<div style={totalPriceContainerStyle}>
					<Input type="text" addonBefore="$" value={this.state.value.toFixed(2)} readonly/>
					<Button bsStyle="success" bsSize="medium" style={{marginLeft:"10px"}}>Request</Button>
				</div>
			</div>
		);
	}
}

