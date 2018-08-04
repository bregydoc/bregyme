import React, { Component } from 'react';
import styled from 'styled-components';

const Hub = styled.div`
	grid-column: 1/2;
	grid-row: 3/4;
`;

class TabHub extends Component {
	render() {
		return <Hub>{this.props.children}</Hub>;
	}
}

export default TabHub;
