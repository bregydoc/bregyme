// import React, { Component } from 'react';
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
	height: 100vh;
	width: 100vw;
	background-color: #0a0029;

	display: grid;
`;
export { BackgroundLandscape, BackgroundMobile };
