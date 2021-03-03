import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import RiskAssessmentForm from "./RiskAssessmentForm";
import AdminPanel from "./AdminPanel"
import {Row, Jumbotron, Button} from "react-bootstrap";
import React, { Component } from "react";

class HomePage extends Component{

	constructor(props){
		super(props);

		this.state = ({display: "Home"});

		this.switchPage = this.switchPage.bind(this);
	}

	switchPage(page){
		this.setState({display: page});
	}

	home(){
		<Row>
			<Row>
                    <Jumbotron fluid className="jumbo">
                        <h1>Admin Panel</h1>
                    </Jumbotron>
                </Row>
                <Row>
                    <Button onClick={this.switchPage.bind(this, "Admin")}>Admin</Button>
                    <Button onClick={this.switchPage.bind(this, "Form")}>Form</Button>
                </Row>
		</Row>
	}

	admin(){
		return(
			<AdminPanel />
		);
	}

	form(){
		return(
			<RiskAssessmentForm />
		);
	}

	render(){
		let display;
        if (this.state.display === "Home") {
            display = this.SearchStudentForms();
        }
        if (this.state.display === "Admin") {
            display = this.CurrentSettings();
        }
        if (this.state.display === "Form") {
            display = this.SetLimits();
        }
		return(
			<Row>
				{display}
			</Row>
		);
	}
}

export default HomePage;