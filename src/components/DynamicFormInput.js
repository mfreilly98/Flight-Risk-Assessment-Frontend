import React, {useEffect, useState} from 'react';
import {Button, Row, Col, Form, Jumbotron, Container, FormGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import moment from 'moment';

import FlightDutyFormInput from "./FlightDutyFormInput";
import TypeOfFlightFormInput from "./TypeOfFlightFormInput";
import './../stylesheets/RiskAssessmentForm.css';
import './../stylesheets/AdminPanel.css';


function DynamicFormInput(props) {

    const [currentWeather, setCurrentWeather] = useState({
        airSigmetList: [],
        crosswind: 0,
        crosswind_gust: 0,
        headwind: 0,
        headwind_gust: 0,
        instrumentCurrent: true,
        metar: '',
        pireps: [],
        primaryRunway: ''
    });
    const [isInstrumentCurrent, setIsInstrumentCurrent] = useState("false");

    /*useEffect( () =>{
        axios({
            method: 'post',
            url: "/basicFormInfo",
            data: props.requestData
        }).then(response => {
            console.log(response.data);
            setCurrentWeather(response.data);
        })
    },[]);*/

    function checkCrosswind(){
        return true;
    }
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
               {currentWeather.instrumentCurrent &&
                   <Form.Group as={Row} controlId="isInstrumentCurrent">
                       <Form.Label column md="4">Are you instrument Proficient and Current? </Form.Label>
                       <Form.Control as="select" column md="8" className="studentInfo" name="student_level"
                                     onChange={e => setIsInstrumentCurrent(e.target.value)} value={isInstrumentCurrent}>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                       </Form.Control>
                   </Form.Group>
               }
               {checkCrosswind &&
               <Form.Group as={Row} controlId="crosswind">
                   <Form.Label column md="4">Are you instrument Proficient and Current? </Form.Label>
                   <Form.Control as="select" column md="8" className="studentInfo" name="student_level"
                                 onChange={e => setIsInstrumentCurrent(e.target.value)} value={isInstrumentCurrent}>
                       <option value="Yes">Yes</option>
                       <option value="No">No</option>
                   </Form.Control>
               </Form.Group>
               }

           </Form>

       </Container>
    );
}


export default DynamicFormInput;
