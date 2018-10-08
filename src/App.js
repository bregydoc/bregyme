import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import {className} from 'styled-components';

import Main from './pages/Main';
import Bitacora from './pages/Bitacora';
import Research from './pages/Research';
import NotFound from './pages/404';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition
								timeout={600}
								classNames="fade"
								key={location.key}
							>
								<Switch>
									<Route exact path="/" component={Main} />
									<Route
										exact
										path="/bitacora"
										component={Bitacora}
									/>
									<Route
										path="/research"
										component={Research}
									/>
									<Route path="/404" component={NotFound} />
									<Route component={NotFound} />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			</BrowserRouter>
		);
	}
}

export default App;
