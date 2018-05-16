import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../pages/Main";
import Research from "../pages/Research";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Main} />
					<Route path="/research" component={Research} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
