import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
    0%{background-position:71% 0%}
    50%{background-position:30% 100%}
    100%{background-position:71% 0%}
`;
const Base = styled.div`
	margin: 20px;
	max-width: 300px;
	max-height: 60px;
	height: 50px;
	padding-top: 4px;
	padding-bottom: 4px;
	/* padding: 6px 8px 6px 8px; */
	/* display: inline-block; */
	text-align: center;
	vertical-align: middle;

	/* background-image: linear-gradient(-133deg, #6a11cb 0%, #2575fc 100%); */
	background: linear-gradient(8deg, #6a11cb 0%, #2575fc 100%);

	background-size: 400% 400%;
	border-radius: 40px;

	/* transition: 0.3s; */
	:hover {
		cursor: pointer;
		animation: ${animation} 5s ease infinite;
	}

	${props => {
		if (props.isMobile) {
			return css`
				height: 40px;
				padding-top: 3px;
				padding-bottom: 3px;
				max-width: 260px;
			`;
		}
	}};
`;

const Child = styled.div`
	position: relative;
	color: white;
	font-family: 'Rubik', sans-serif;
	font-size: 17px;
	font-weight: 500;
	text-transform: uppercase;
	vertical-align: middle;
	text-align: center;

	top: 50%;
	transform: translateY(-50%);

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 14px;
			`;
		}
	}};
`;

class Button extends Component {
	mouseMove = e => {
		console.log(e);
	};
	render() {
		return (
			<Base onMouseMove={this.mouseMove} isMobile={this.props.isMobile}>
				<Child isMobile={this.props.isMobile}>
					{this.props.children}
				</Child>
			</Base>
		);
	}
}

export default Button;
