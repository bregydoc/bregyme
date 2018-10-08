import React, { Component } from 'react';
import MenuIcon from '../images/menu.png';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const Wrap = styled.div`
	margin-left: auto;
	${props => {
		if (props.isMobile) {
			return css`
				display: none;
			`;
		}
	}};
`;
const Icon = styled.img`
	width: auto;
	height: 16px;
`;
const VisibleMenu = styled.div`
	margin-right: 20px;
	:hover {
		cursor: pointer;
	}
`;
const Current = styled.div``;

const Options = styled.div`
	display: flex;
	/* margin-left: auto; */
	font-family: 'Roboto Mono', monospace;
	font-size: 18px;
	color: #ffffff;
	justify-content: space-between;
	width: 50vw;
	text-align: center;
	align-content: center;

	position: relative;
	top: 35%;
	margin-right: 20px;

	${props => {
		if (props.isMobile) {
			return css`
				display: none;
			`;
		}
	}};
`;

const Sub = styled.div`
	height: 3px;
	width: 100%;
	margin-top: 3px;
	align-self: center;
	justify-self: center;
	background-color: #6bf1ff;
	position: relative;
`;

const OptionWrap = styled.div`
	text-decoration: none;
	color: white;
	:hover {
		text-decoration: none;
		cursor: pointer;
	}
`;

const Option = props => {
	return (
		<OptionWrap onClick={props.onClick}>
			{props.children}
			{props.active ? <Sub /> : null}
		</OptionWrap>
	);
};

class MenuBar extends Component {
	state = {
		mode: 0,
		selected: 0,
		menuActive: false,
		options: ['home', 'bitacora', 'projects', 'research']
	};

	onSelectOption = option => {
		this.setState(prevState => {
			return { ...prevState, selected: option };
		});
	};

	openMenu = () => {
		this.setState(prevState => {
			return { ...prevState, menuActive: true };
		});
	};

	closeMenu = () => {
		this.setState(prevState => {
			return { ...prevState, menuActive: false };
		});
	};

	render() {
		return (
			<Wrap isMobile={this.props.isMobile}>
				{this.props.isMobile ? (
					<VisibleMenu
						onClick={
							this.state.menuActive
								? this.closeMenu
								: this.openMenu
						}
					>
						<Current>{this.state.selected}</Current>
						<Icon src={MenuIcon} />
					</VisibleMenu>
				) : null}

				<Options
					isMobile={this.props.isMobile}
					menuActive={this.state.menuActive}
				>
					{this.state.options.map((option, i) => {
						return (
							<Link
								to={`/${option === 'home' ? '' : option}`}
								style={{ textDecoration: 'none' }}
							>
								<Option
									active={this.state.selected === i}
									onClick={() => this.onSelectOption(i)}
									key={i}
								>
									{option.toUpperCase()}
								</Option>
							</Link>
						);
					})}
				</Options>
			</Wrap>
		);
	}
}

export default MenuBar;
