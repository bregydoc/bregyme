import React, { Component } from "react";
import styled from "styled-components";

import "font-awesome/css/font-awesome.min.css";

const WrapButton = styled.div`
	border: solid 2px white;
	padding: 8px;
	border-radius: 6px;
	background-color: white;
	transition: 0.3s;
	max-width: 150px;
	:hover {
		cursor: pointer;
		box-shadow: 4px 4px #4f6dc6;
		transform: translate(-4px, -4px);
	}
	:active {
		transform: translate(0px, 0px);
		box-shadow: 0 0 #4f6dc6;
	}
`;

const ButtonContainer = styled.div`
	text-align: center;
	vertical-align: middle;
	align-items: center;
	color: white;
	display: flex;
	background-color: white;
	color: #111111;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
	:hover {
		cursor: pointer;
	}
	font-family: "Raleway", sans-serif;
	font-weight: 500;
`;

class GButton extends Component {
	state = {};

	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			type: this.props.type
		};
	}

	render() {
		return (
			<WrapButton
				onClick={() => {
					window.location.href = "https://github.com/bregydoc";
				}}
			>
				<ButtonContainer>
					<i
						className="fa fa-github fa-2x"
						style={{ marginRight: "10px" }}
					/>
					My Github
				</ButtonContainer>
			</WrapButton>
		);
	}
}

export default GButton;
