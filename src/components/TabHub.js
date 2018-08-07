import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Hub = styled.div`
	grid-column: 1/2;
	grid-row: 3/4;

	${props => {
		if (props.isMobile) {
			return css`
				grid-row: 5/6;

				position: fixed;
				bottom: 10px;
			`;
		}
	}};
`;

class TabHub extends Component {
	render() {
		return <Hub isMobile={this.props.isMobile}>{this.props.children}</Hub>;
	}
}

export default TabHub;
