import './../stylesheets/AdminPanel.css';
import RiskAssessmentForm from "./RiskAssessmentForm";
import AdminPanel from "./AdminPanel"
import {Row, Jumbotron, Button} from "react-bootstrap";
import React, { Component } from "react";

class HomePage extends Component{

	constructor(props){
		super(props);

		this.state = ({displayPage: "Home"});

		this.switchPage = this.switchPage.bind(this);
	}

	switchPage(page){
		this.setState({displayPage: page});
	}

	home(){
		return(
			<Row className="section">
				<Row>
						<Jumbotron fluid className="jumbo">
							<h1>Admin Panel</h1>
						</Jumbotron>
					</Row>
					<Row>
						<Button className="btn dash-btn" onClick={this.switchPage.bind(this, "Admin")}>Admin</Button>
						<Button className="btn dash-btn" onClick={this.switchPage.bind(this, "Form")}>Form</Button>
					</Row>
			</Row>
		);
	}

	admin(){
		return(
			<><AdminPanel />
			<Button className="btn dash-btn" onClick={this.switchPage.bind(this, "Home")}>Back to Home</Button></>
		);
	}

	form(){
		return(
			<><RiskAssessmentForm />
			<Button className="btn dash-btn" onClick={this.switchPage.bind(this, "Home")}>Back to Home</Button></>
		);
	}

	render(){
		let display;
        if (this.state.displayPage === "Home") {
            display = this.home();
        }
        if (this.state.displayPage === "Admin") {
            display = this.admin();
        }
        if (this.state.displayPage === "Form") {
            display = this.form();
        }
		return(
			<>
				{display}
			</>
		);
	}
}

export default HomePage;