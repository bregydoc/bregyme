import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Logo from './Logo';
import MenuBar from './MenuBar';

const Wrapper = styled.div`
	display: flex;
	height: 100%;

	vertical-align: middle;
	align-content: center;
	grid-column: 1/4;
	grid-row: 1/2;
	${props => {
		if (props.isMobile) {
			return css`
				justify-content: center;
				grid-column: 1/4;
				grid-row: 1/2;
			`;
		}
	}};
`;

class Toolbar extends Component {
	state = { mode: 0, selected: 0 };

	onSelectOption = option => {
		this.setState(prevState => {
			return { ...prevState, selected: option };
		});
	};

	render() {
		return (
			<Wrapper isMobile={this.props.isMobile}>
				<Logo />
				<MenuBar isMobile={this.props.isMobile} />
			</Wrapper>
		);
	}
}

export default Toolbar;
