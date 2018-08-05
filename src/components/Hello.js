import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: block;
	grid-row: 3/4;
	grid-column: 2/3;
`;

const Title = styled.div`
	font-family: 'Rubik', sans-serif;
	font-weight: 600;
	color: white;
	font-size: 54px;

	text-transform: uppercase;
`;

const Content = styled.div`
	font-family: 'Robot Mono', monospace;
	font-weight: 400;
	color: white;
	font-size: 18px;
	line-height: 1.5;
	margin-top: 7.6px;
`;

const HighLight = styled.span`
	background-color: #5442fe;
`;
const Hello = props => {
	return (
		<Wrapper>
			<Title>Hi, I'm bregy</Title>
			<Content>
				I love the new technologies and develop it, I work with hardware
				and software and my passion is the{' '}
				<HighLight>Artificial Intelligence</HighLight>. Always I'm going
				to try to improve all.
			</Content>
		</Wrapper>
	);
};

export default Hello;
