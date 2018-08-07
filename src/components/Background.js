import React, { Component } from 'react';
import styled from 'styled-components';

const BackgroundLandscape = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #0a0029;

	display: grid;
	overflow: hidden;
	grid-template-columns: 15.23% 31.39% 52.45%;
	grid-template-rows: 8.81% 12.35% 26.17% 31.82% 20.85%;
`;

const BackgroundMobile = styled.div`
	/* height: calc(100vh - 56px); */
	position: absolute;
	height: 100vh;
	width: 100vw;
	background-color: #0a0029;

	display: grid;
	overflow: hidden;

	grid-template-columns: 11.42% 77.16% 11.42%;
	grid-template-rows: 12.56% 44vw 25vw 100%;
	/* 38.35 */
`;

const Background = props => {
	if (!props.isMobile && !props.isTablet) {
		return <BackgroundLandscape>{props.children}</BackgroundLandscape>;
	}
	return <BackgroundMobile>{props.children}</BackgroundMobile>;
};

export default Background;
