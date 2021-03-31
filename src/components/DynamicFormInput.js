import React, { useState } from 'react';
import {Button, Row, Col, Form, Jumbotron, Container, FormGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import moment from 'moment';

import FlightDutyFormInput from "./FlightDutyFormInput";
import TypeOfFlightFormInput from "./TypeOfFlightFormInput";
import './../stylesheets/RiskAssessmentForm.css';
import './../stylesheets/AdminPanel.css';

/*
 * This will handle the User input for the risk assessment form.
 */
function DynamicFormInput(props) {

    return (
       <Container>
           <Row>
               <Col>
                   <Jumbotron fluid className="jumbo">
                       <h1 className="text-center">Additional Questions</h1>
                   </Jumbotron>
               </Col>
           </Row>
           <Form>
               {/*{props.currentWeather.instrumentCurrent &&
                   <FormGroup as={Row}>

                   </FormGroup>
               }*/}

           </Form>

       </Container>
    );
}


export default DynamicFormInput;
