import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	display: block;
	grid-row: 3/4;
	grid-column: 2/3;

	${props => {
		if (props.isMobile) {
			return css`
				grid-row: 2/3;
				grid-column: 2/3;
			`;
		}
	}};
`;

const Title = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 600;
	color: white;
	font-size: 54px;

	text-transform: uppercase;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 10vw;
			`;
		}
	}};
`;

const Content = styled.div`
	font-family: 'Robot Mono', monospace;
	font-weight: 400;
	color: white;
	font-size: 18px;
	line-height: 1.5;
	margin-top: 7.6px;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 3.6vw;
			`;
		}
	}};
`;

const HighLight = styled.span`
	background-color: #5442fe;
`;
const Hello = props => {
	return (
		<Wrapper isMobile={props.isMobile}>
			<Title isMobile={props.isMobile}>Hi, I'm bregy</Title>
			<Content isMobile={props.isMobile}>
				I love the new technologies and develop it, I work with hardware
				and software and my passion is the{' '}
				<HighLight>Artificial Intelligence</HighLight>. Always I'm going
				to try to improve all.
			</Content>
		</Wrapper>
	);
};

export default Hello;
