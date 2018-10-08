import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BregyEco from '../images/bregyeco.png';

const Base = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-flow: column;
	align-content: center;
	align-items: center;
	justify-content: center;
`;

const Logo = styled.img`
	width: 20vw;
	height: auto;
`;

const Message = styled.span`
	margin-top: 5vh;
	font-family: 'Robot Mono', monospace;
	font-size: 4vw;
`;
class NotFoundPage extends Component {
	render() {
		return (
			<Base>
				<Logo src={BregyEco} />
				<Message>Page Not Found 😳😬</Message>
			</Base>
		);
	}
}

export default NotFoundPage;
