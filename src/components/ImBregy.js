import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import GButton from "./GButton";
import LButton from "./LButton";
import { StyleSheet, css } from "aphrodite";
import RButton from "./RButton";

const styles = StyleSheet.create({
	buttons: {
		marginTop: "25px",
		width: "30%",
		"@media only screen and (max-width: 600px)": {
			width: "100%"
		},
		"@media only screen and (max-width: 850px)": {
			width: "100%"
		}
	}
});

const Greeting = styled.div`
	font-family: "Signika", sans-serif;
	font-size: 13vh;
	color: white;
`;

const Description = styled.div`
	margin-top: 15px;
	font-family: "Lato", sans-serif;
	font-weight: 300;
	font-size: 3vh;
	color: white;
`;

const Wrap = styled.div`
	padding-left: 100px;
	padding-top: 8%;
	@media only screen and (max-width: 600px) {
		padding-left: 0px;
	}
`;

class ImBregy extends Component {
	state = {
		width: window.innerWidth
	};

	componentWillMount() {
		window.addEventListener("resize", this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	render() {
		const { width } = this.state;
		const isMobile = width <= 500;

		return (
			<Wrap>
				<Grid fluid>
					<Row>
						<Col lg={6} sm={12}>
							<Greeting>Hi, I'm Bregy</Greeting>
						</Col>
					</Row>
					<Row>
						<Col lg={6} sm={12}>
							<Description>
								I'm very interested in new technologies, I love
								software, hardware and science in general.
							</Description>
						</Col>
					</Row>
					<Row className={css(styles.buttons)}>
						<Col sm={6} xs={6} lg={6} md={6}>
							<GButton />
						</Col>
						<Col sm={6} xs={6} lg={6} md={6}>
							<LButton />
						</Col>
						{/* <Col>
							<RButton />
						</Col> */}
					</Row>
				</Grid>
			</Wrap>
		);
	}
}

export default ImBregy;
