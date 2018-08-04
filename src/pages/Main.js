import React, { Component } from 'react';
import styled from 'styled-components';

import { BackgroundLandscape } from '../components/Background';
import Hello from '../components/Hello';
import Toolbar from '../components/Toolbar';
import Dreamer from '../components/Dreamer';
import Contact from '../components/Contact';
import MediaTab from '../components/MediaTab';
import TabHub from '../components/TabHub';
import Button from '../components/Button';

const SpacerButton = styled.div`
	margin-top: 50px;
	grid-column: 2/3;
	grid-row: 4/5;
`;
class MainPage extends Component {
	render() {
		return (
			<div>
				<BackgroundLandscape>
					<Toolbar />
					<Hello />
					<Dreamer />
					<Contact />
					<TabHub>
						<MediaTab type={'github'} />
						<MediaTab type={'linkedin'} />
					</TabHub>

					<SpacerButton>
						<Button>SEE MY CURRENT PROJECT</Button>
					</SpacerButton>
				</BackgroundLandscape>
			</div>
		);
	}
}

export default MainPage;
