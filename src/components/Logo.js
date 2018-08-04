import React, { Component } from 'react';
import styled from 'styled-components';

import BregyLogo from '../images/bregylogo.png';

const LogoImage = styled.img`
	width: auto;
	height: 42px;
	padding: 20px;
`;

const Logo = props => {
	return <LogoImage src={BregyLogo} />;
};

export default Logo;
