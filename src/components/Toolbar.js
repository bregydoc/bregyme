import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ToolbarWrap = styled.div`
	width: 50%;
	padding-left: 6vw;
	padding-top: 8vh;
`;

const ToolbarWItem = styled.div`
	/* flex: ${props => (props.flex ? props.flex : 1)}; */
	color: white;
	font-family: "Lato", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
`;

const ItemSelected = styled.div`
	margin-top: 5px;
	background-color: white;
	height: 3px;
	width: auto;
	border-radius: 1px;
	display: ${props => (props.selected ? "" : "none")};
`;

const ToolbarItem = class extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{ cursor: "pointer" }}>
				<ToolbarWItem>{this.props.children}</ToolbarWItem>
				<ItemSelected selected={this.props.selected} />
			</div>
		);
	}
};

class Toolbar extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		itemSelected: "main"
	};

	itemClicked = sel => {
		console.log(sel);
	};

	render() {
		return (
			<ToolbarWrap>
				<Grid fluid>
					<Row around="xs">
						<Col lg={3}>
							<ToolbarItem
								selected={this.state.itemSelected === "main"}
								onClick={() => {
									console.log("asdas");
								}}
							>
								Main
							</ToolbarItem>
						</Col>
						<Col lg={3}>
							<ToolbarItem
								selected={
									this.state.itemSelected === "bitacora"
								}
							>
								Bitacora
							</ToolbarItem>
						</Col>
						<Col lg={3}>
							<ToolbarItem
								selected={
									this.state.itemSelected === "projects"
								}
							>
								Projects
							</ToolbarItem>
						</Col>
						<Col lg={3}>
							<ToolbarItem
								selected={
									this.state.itemSelected === "research"
								}
							>
								Research
							</ToolbarItem>
						</Col>
					</Row>
				</Grid>
			</ToolbarWrap>
		);
	}
}

export default Toolbar;
