import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import "font-awesome/css/font-awesome.min.css";

const ContactWrap = styled.div`
	color: white;
	font-family: "Raleway", sans-serif;
	margin-left: 100px;
	max-width: 40%;
	@media only screen and (max-width: 600px) {
		margin-left: 0px;
		max-width: 100%;
	}

	margin-top: 50px;
`;

const ContactTitle = styled.div`
	font-family: "Signika", sans-serif;
	font-size: 40px;
`;

class ContactMe extends Component {
	render() {
		return (
			<ContactWrap>
				<Grid fluid>
					<Row>
						<Col>
							<ContactTitle>Contact me</ContactTitle>
						</Col>
					</Row>
					<Row middle="xs">
						<Col lg={1} sm={1} xs={1}>
							<i className="fa fa-envelope" />
						</Col>
						<Col lg={11} sm={11} xs={10}>
							<p>bregy.malpartida@utec.edu.pe</p>
						</Col>
					</Row>
					<Row middle="xs">
						<Col lg={1} sm={1} xs={1}>
							<i className="fa fa-phone" />
						</Col>
						<Col lg={11} sm={11} xs={10}>
							<p>+051957821858</p>
						</Col>
					</Row>
				</Grid>
			</ContactWrap>
		);
	}
}

export default ContactMe;
