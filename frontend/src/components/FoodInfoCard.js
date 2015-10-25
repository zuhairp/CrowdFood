import React from 'react';
import {Col }     from 'react-bootstrap';

export default (props) => {
	const { name, distance } = props;

	const nameStyle = {
		fontWeight: 'bold',
		padding: 0,
	};

	const distanceStyle = {
		padding: 0,
	};

	return (
		<Col xs={12} sm={3}>
			<img src="http://placehold.it/100x100" />
			<p style={nameStyle}><a href="/food">{ name }</a></p>
			<p style={distanceStyle}> { distance } mi</p>
		</Col>
	);
};