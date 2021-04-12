import React, {useEffect, useState} from 'react';
import {Accordion, Card, Row, Col, Form, Jumbotron, Container, useAccordionToggle} from 'react-bootstrap';
import axios from 'axios';
import {BsChevronDoubleDown, BsChevronDoubleRight} from "react-icons/all";


import AirSigmetModal from "./AirSigmetAccordion";
import './../stylesheets/RiskAssessmentForm.css';
import './../stylesheets/AdminPanel.css';
import AirSigmetAccordion from "./AirSigmetAccordion";


function DynamicFormInput(props) {

    const [currentWeather, setCurrentWeather] = useState({
        airSigmetList: [],
        winds: '',
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
    const [acceptableWinds, setAcceptableWinds] = useState("false");
    const [requireWinds, setRequireWinds] = useState(false);
    const [displayAirSigmets, setDisplayAirSigmets] = useState([]);
    const [acceptedAirSigmets, setAcceptedAirSigmets] = useState([]);


    useEffect(() => {
        console.log(props.requestData);
        axios({
            method: 'post',
            url: "/basicFormInfo",
            data: props.requestData
        }).then(response => {
            console.log(response.data);
            setCurrentWeather(response.data);
            checkCrosswind(response.data);
            let airSigmetAccordionList = [];
            response.data.airSigmetList.map((item,index) => airSigmetAccordionList.push(<AirSigmetAccordion airSigmet={item} index={index}/> ));
            setDisplayAirSigmets(airSigmetAccordionList);
        })
    }, []);

    function checkCrosswind(data) {
        //TODO: get threshold values from backend
        console.log(currentWeather);
        setRequireWinds(data.crosswind >= 0 || data.crosswind_gust >= 15 || data.headwind >= 25 || data.headwind_gust >= 25);
    }

    function getWind(isCrosswind) {
        if (isCrosswind) {
            if (currentWeather.crosswind_gust === 0)
                return currentWeather.crosswind;
            else
                return currentWeather.crosswind + "G" + currentWeather.crosswind_gust;
        } else {
            if (currentWeather.headwind_gust === 0)
                return currentWeather.headwind;
            else
                return currentWeather.headwind + "G" + currentWeather.headwind_gust;
        }
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
                    <Form.Label column md="4">Are you instrument Proficient and Current?</Form.Label>
                    <Form.Control as="select" column md="8" className="studentInfo" name="student_level"
                                  onChange={e => setIsInstrumentCurrent(e.target.value)} value={isInstrumentCurrent}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>
                }
                {requireWinds &&
                <Form.Group as={Row} controlId="crosswind">
                    <Form.Label column md="4">The winds are {currentWeather.winds}. {currentWeather.primaryRunway} has a
                        headwind of {getWind(false)} and a crosswind of {getWind(true)}. Is that
                        acceptable? </Form.Label>
                    <Form.Control as="select" column md="8" className="studentInfo" name="student_level"
                                  onChange={e => setAcceptableWinds(e.target.value)} value={acceptableWinds}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>
                }

                {currentWeather.airSigmetList.length > 0 &&
                    <Form.Group as={Row}>
                        <Col md="12">
                            <h3 className="text-center">Airmets and Sigmets</h3>
                        </Col>
                        <Col md="12">
                            <Accordion>
                                {displayAirSigmets}
                            </Accordion>
                        </Col>
                    </Form.Group>
                }
            </Form>

        </Container>
    );
}


export default DynamicFormInput;
