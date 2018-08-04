import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	grid-column: 1/4;
	grid-row: 1/2;

	vertical-align: middle;
	align-content: center;
`;

const Options = styled.div`
	display: flex;
	margin-left: auto;
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
	:hover {
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

class Toolbar extends Component {
	state = { mode: 0, selected: 0 };

	onSelectOption = option => {
		this.setState(prevState => {
			return { ...prevState, selected: option };
		});
	};

	render() {
		return (
			<Wrapper>
				<Logo />
				<Options>
					<Option
						active={this.state.selected === 0}
						onClick={() => this.onSelectOption(0)}
					>
						HOME
					</Option>
					<Option
						active={this.state.selected === 1}
						onClick={() => this.onSelectOption(1)}
					>
						BITACORA
					</Option>
					<Option
						active={this.state.selected === 2}
						onClick={() => this.onSelectOption(2)}
					>
						PROJECTS
					</Option>
					<Option
						active={this.state.selected === 3}
						onClick={() => this.onSelectOption(3)}
					>
						RESEARCH
					</Option>
				</Options>
			</Wrapper>
		);
	}
}

export default Toolbar;
