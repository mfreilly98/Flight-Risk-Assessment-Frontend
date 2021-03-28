import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './../stylesheets/AdminPanel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Row, Form, FormGroup, Button} from 'react-bootstrap';

function SetLimits() {
  return (
          <div>
            <Jumbotron fluid className="jumbo">
              <h1>Admin Panel</h1>
              <Link to="/AdminPanel/SearchStudent"><Button className="btn dash-btn">Search Students' Forms</Button></Link>
              <Link to="/AdminPanel/CurrentSettings"><Button className="btn dash-btn">Current Safety Limits</Button></Link>
              <Link to="/AdminPanel/SetLimits"><Button className="btn dash-btn">Set Safety Limits</Button></Link>
              <Link to="/"><Button className="btn dash-btn">Form</Button></Link>
            </Jumbotron>
            <Form inline className="section">
                <h3>Set safety limilts</h3>
                <h5>Cross Winds (knots)</h5>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Max safe limit: </Form.Label>
                        <Form.Control type="number"></Form.Control>
                        <Button className="btn btn-default">Set</Button>
                    </FormGroup>
                </Form.Row>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Mid safe limit: </Form.Label>
                        <Form.Control type="number"></Form.Control>
                        <Button className="btn btn-default">Set</Button>
                    </FormGroup>
                </Form.Row>
                <h5>Visibility (statue miles)</h5>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Max safe limit: </Form.Label>
                        <Form.Control type="number"></Form.Control>
                        <Button className="btn btn-default">Set</Button>
                    </FormGroup>
                </Form.Row>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Mid safe limit: </Form.Label>
                        <Form.Control type="number"></Form.Control>
                        <Button className="btn btn-default">Set</Button>
                    </FormGroup>
                </Form.Row>
            </Form>
          </div>
        )
}

export default SetLimits;