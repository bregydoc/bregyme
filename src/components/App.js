import React, { Component } from "react";

import Background from "./Background";
import Toolbar from "./Toolbar";

class App extends Component {
	render() {
		return (
			<div>
				<Background>
					<Toolbar />
				</Background>
			</div>
		);
	}
}

export default App;
