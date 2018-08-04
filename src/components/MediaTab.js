import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import GithubLogo from '../images/git.png';
import LinkedinLogo from '../images/in.png';

const Tab = styled.div`
	background-color: ${props => props.color};
	border-bottom-right-radius: 50px;
	border-top-right-radius: 50px;
	padding: 8px;
	width: 64px;
	max-width: 84px;
	align-content: flex-end;
	text-align: end;

	margin-top: ${props => (props.type === 'github' ? '50px' : '6px')};
	transition: 0.5s;
	${props => {
		if (props.hover) {
			return css`
				width: 80px;
				cursor: pointer;
			`;
		}
	}};
`;

const tooltipAnimation = keyframes`
    from {
        opacity: 0;
    }

    top {
        opacity: 1;
    }
`;

const Tooltip = styled.div`
	background-color: white;
	font-family: 'Roboto Mono', monospace;

	color: #08002b;
	font-size: 10px;

	text-transform: uppercase;
	z-index: 3;
	position: absolute;
	margin-top: -90px;
	margin-left: 30px;
	padding: 5px 8px 5px 8px;
	border-radius: 20px;

	animation: ${tooltipAnimation} 0.5s;
`;

const Logo = styled.img`
	width: auto;
	height: 38px;
`;

class MediaTab extends Component {
	state = { hover: false };

	mouseEnter = () => {
		this.setState(prevState => {
			return { ...prevState, hover: true };
		});
	};

	mouseLeave = () => {
		this.setState(prevState => {
			return { ...prevState, hover: false };
		});
	};

	render() {
		return (
			<div>
				<Tab
					color={this.props.type === 'github' ? '#EFEFEF' : '#91EAFF'}
					type={this.props.type}
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
					hover={this.state.hover}
				>
					<Logo
						src={
							this.props.type === 'github'
								? GithubLogo
								: LinkedinLogo
						}
					/>
				</Tab>
				{this.state.hover ? (
					<Tooltip hover={this.state.hover}>
						See my{' '}
						{this.props.type === 'github' ? 'Github' : 'LinkedIn'}{' '}
						Account
					</Tooltip>
				) : null}
			</div>
		);
	}
}

export default MediaTab;
