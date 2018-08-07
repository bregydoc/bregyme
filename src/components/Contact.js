import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Base = styled.div`
	display: flex;
	flex-flow: column;

	grid-column: 1/2;
	grid-row: 5/6;

	padding-left: 50px;

	${props => {
		if (props.isMobile) {
			return css`
				grid-column: 2/3;
				grid-row: 4/5;
				padding-left: 0;
			`;
		}
	}};
`;
const Title = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 600;
	color: white;
	font-size: 28px;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 4.1vw;
			`;
		}
	}};
	text-transform: uppercase;
`;

const Email = styled.div`
	font-family: 'Robot Mono', monospace;
	font-weight: 400;
	color: white;
	font-size: 16px;
	margin-top: 35px;
	${props => {
		if (props.isMobile) {
			return css`
				font-size: 3.1vw;
				margin-top: 6px;
			`;
		}
	}};
	/* margin-top: 7.6px; */
`;

const PhoneNumber = styled.div`
	font-family: 'Robot Mono', monospace;
	font-weight: 400;
	color: white;
	font-size: 16px;
	margin-top: 10px;
	${props => {
		if (props.isMobile) {
			return css`
				font-size: 3.1vw;
				margin-top: 5px;
			`;
		}
	}};
	/* margin-top: 7.6px; */
`;

const Contact = props => {
	return (
		<Base isMobile={props.isMobile}>
			<Title isMobile={props.isMobile}>CONTACT</Title>
			<Email isMobile={props.isMobile}>
				bregy.malpartida@utec.edu.pe
			</Email>
			<PhoneNumber isMobile={props.isMobile}>+51957821858</PhoneNumber>
		</Base>
	);
};

export default Contact;
