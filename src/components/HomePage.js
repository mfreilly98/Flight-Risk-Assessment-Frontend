import './../stylesheets/AdminPanel.css';
import {Link} from "react-router-dom";
import {Row, Jumbotron, Button} from "react-bootstrap";
import React, { Component } from "react";

class HomePage extends Component{

	render(){
		return(
			<Row className="section">
				<Row>
					<Jumbotron fluid className="jumbo">
						<h1>Home Page</h1>
					</Jumbotron>
				</Row>
				<Row>
					<Link to="/AdminPanel">
						<Button className="btn dash-btn">Admin</Button>
					</Link>
					<Link to="/RiskAssessmentForm">
						<Button className="btn dash-btn">Form</Button>
					</Link>
				</Row>
			</Row>
		);
	}
}

export default HomePage;