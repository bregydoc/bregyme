import React, { Component } from "react";
import styled from "styled-components";

import Background from "../components/Background";
import Toolbar from "../components/Toolbar";
import ImBregy from "../components/ImBregy";
import ContactMe from "../components/ContactMe";

const CopyWrap = styled.div`
	color: white;
	position: absolute;
	bottom: 20px;
	right: 20px;
	font-family: "Raleway", sans-serif;
	font-weight: 300;
	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

const CopyR = props => {
	return (
		<CopyWrap>
			Image by Matthias Schmidt<br />
			<a
				style={{ fontSize: "11px" }}
				href={"https://www.artstation.com/steppenwolf"}
			>
				https://www.artstation.com/steppenwolf
			</a>
		</CopyWrap>
	);
};

class MainPage extends Component {
	render() {
		return (
			<div>
				<Background>
					<Toolbar />
					<ImBregy />
					<ContactMe />
				</Background>
				<CopyR />
			</div>
		);
	}
}

export default MainPage;
