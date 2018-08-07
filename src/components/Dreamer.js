import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import DreamerImage from '../images/dreamer.png';

const DreamerWrap = styled.img`
	position: absolute;
	width: auto;
	height: 75vh;

	/* grid-column: 3/4;
	   grid-row: 3/6; */
	bottom: 0;
	right: 0;

	${props => {
		if (props.isMobile) {
			return css`
				height: 40vh;
				position: absolute;
				bottom: 0;
			`;
		}
	}};
`;

const Dreamer = props => {
	return <DreamerWrap src={DreamerImage} isMobile={props.isMobile} />;
};

export default Dreamer;
