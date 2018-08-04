import React, { Component } from 'react';
import styled from 'styled-components';

const Base = styled.div`
	display: flex;
	flex-flow: column;

	grid-column: 1/2;
	grid-row: 5/6;

	padding-left: 50px;
`;
const Title = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 600;
	color: white;
	font-size: 28px;

	text-transform: uppercase;
`;

const Email = styled.div`
	font-family: 'Robot Mono', monospace;
	font-weight: 400;
	color: white;
	font-size: 16px;
	margin-top: 35px;
	/* margin-top: 7.6px; */
`;

const PhoneNumber = styled.div`
	font-family: 'Robot Mono', monospace;
	font-weight: 400;
	color: white;
	font-size: 16px;
	margin-top: 10px;
	/* margin-top: 7.6px; */
`;

const Contact = props => {
	return (
		<Base>
			<Title>CONTACT</Title>
			<Email>bregy.malpartida@utec.edu.pe</Email>
			<PhoneNumber>+51957821858</PhoneNumber>
		</Base>
	);
};

export default Contact;
