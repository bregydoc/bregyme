import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Background from '../components/Background';

import Hello from '../components/Hello';
import Toolbar from '../components/Toolbar';
import Dreamer from '../components/Dreamer';
import Contact from '../components/Contact';
import MediaTab from '../components/MediaTab';
import TabHub from '../components/TabHub';
import Button from '../components/Button';

const SpacerButton = styled.div`
	margin-top: 50px;
	grid-column: 2/3;
	grid-row: 4/5;
	${props => {
		if (props.isMobile) {
			return css`
				margin-top: 0px;
				grid-column: 2/3;
				grid-row: 3/4;
			`;
		}
	}};
`;

class MainPage extends Component {
	state = {
		// isMobile: window.innerWidth < 650 ? true : false,
		isMobile: window.innerWidth < 450 ? true : false,
		isTablet: window.innerWidth < 750 ? true : false
	};

	handleWindowSizeChange = () => {
		const w = window.innerWidth;
		this.setState(prevState => {
			const iM = window.innerWidth < 450 ? true : false;
			const iT = window.innerWidth < 750 ? true : false;
			return { ...prevState, isMobile: iM, isTablet: iT };
		});
	};

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	render() {
		return (
			<div>
				<Background
					isMobile={this.state.isMobile}
					isTablet={this.state.isTablet}
				>
					<Toolbar
						isMobile={this.state.isMobile}
						isTablet={this.state.isTablet}
					/>
					<Hello
						isMobile={this.state.isMobile}
						isTablet={this.state.isTablet}
					/>
					<Dreamer
						isMobile={this.state.isMobile}
						isTablet={this.state.isTablet}
					/>
					<Contact
						isMobile={this.state.isMobile}
						isTablet={this.state.isTablet}
					/>
					<TabHub
						isMobile={this.state.isMobile}
						isTablet={this.state.isTablet}
					>
						<MediaTab
							type={'github'}
							isMobile={this.state.isMobile}
							isTablet={this.state.isTablet}
						/>
						<MediaTab
							type={'linkedin'}
							isMobile={this.state.isMobile}
							isTablet={this.state.isTablet}
						/>
					</TabHub>

					<SpacerButton
						isMobile={this.state.isMobile}
						isTablet={this.state.isTablet}
					>
						<Button
							isMobile={this.state.isMobile}
							isTablet={this.state.isTablet}
						>
							SEE MY CURRENT PROJECT
						</Button>
					</SpacerButton>
				</Background>
			</div>
		);
	}
}

export default MainPage;
