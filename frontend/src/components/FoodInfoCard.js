import React from 'react';
import {Col }     from 'react-bootstrap';

import { Link } from 'react-router';

export default (props) => {
	const { name, distance, id } = props;

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
			<p style={nameStyle}><Link to={`/food/${id}`}>{ name }</Link></p>
			<p style={distanceStyle}> { distance } mi</p>
		</Col>
	);
};