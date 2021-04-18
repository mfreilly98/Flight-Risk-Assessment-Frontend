import React, {useEffect, useState} from 'react';
import {Accordion, Card, Row, Col, Form, Jumbotron, Container, useAccordionToggle} from 'react-bootstrap';
import axios from 'axios';
import {BsChevronDoubleDown, BsChevronDoubleRight} from "react-icons/all";


import AirSigmetModal from "./AirSigmetAccordion";
import './../stylesheets/RiskAssessmentForm.css';
import './../stylesheets/AdminPanel.css';
import AirSigmetAccordion from "./AirSigmetAccordion";
import PirepAccordion from "./PirepAccordion";


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
        destinationMetar: [],
        pireps: [],
        primaryRunway: ''
    });
    const [isInstrumentCurrent, setIsInstrumentCurrent] = useState("No");
    const [acceptableWinds, setAcceptableWinds] = useState("No");
    const [requireWinds, setRequireWinds] = useState(false);
    const [displayAirSigmets, setDisplayAirSigmets] = useState([]);
    const [displayPireps, setDisplayPireps] = useState([]);
    const [acceptedAirSigmets, setAcceptedAirSigmets] = useState([]);


    useEffect(() => {
        console.log(props.requestData)
        axios({
            method: 'post',
            url: "/basicFormInfo",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            data: props.requestData
        }).then(response => {
            console.log(response.data);
            setCurrentWeather(response.data);
            checkCrosswind(response.data);
            let AirSigmetAccordionList = [];
            let PirepAccordionList = [];
            response.data.airSigmetList.map((item, index) => AirSigmetAccordionList.push(<AirSigmetAccordion
                airSigmet={item} index={index}/>));
            response.data.pireps.map((item, index) => PirepAccordionList.push(<PirepAccordion pirep={item}
                                                                                              index={index}/>));
            setDisplayAirSigmets(AirSigmetAccordionList);
            setDisplayPireps(PirepAccordionList);

        })
    }, []);

    function checkCrosswind(data) {
        //TODO: get threshold values from backend
        //console.log(currentWeather);
        setRequireWinds(data.crosswind >= 10 || data.crosswind_gust >= 10 || data.headwind >= 15 || data.headwind_gust >= 15);
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

    function checkIFR() {
        if (currentWeather.metar === '')
            return false;
        return (currentWeather.metar.flightCategory === "IFR" || currentWeather.metar.flightCategory === "LIFR");
    }

    function displayMetars() {
        if (props.requestData.categoryOfFlight !== "normal" || props.requestData.typeOfFlight === "pattern" || props.requestData.typeOfFlight === "practice area") {
            return (
                <>
                    <h4><u>METAR:</u></h4>
                    <span className="display-metar">{currentWeather.metar.rawText}</span>
                    <br/>
                </>)
        } else if (props.requestData.categoryOfFlight === "normal") {
            return (
                <>
                    <h4><u>Departure METAR: </u></h4>
                    <span className="display-metar">{currentWeather.metar.rawText}</span>
                    <h4><u>{props.requestData.typeOfFlight === "aux_field"? "Auxiliary Airport METARs" : "Destination Airport METARs"}: </u></h4>
                    {currentWeather.destinationMetar.map(i => {
                        if(i === null)
                            return (<span className="error">UNABLE TO DISPLAY METAR. Check Airport CODE.</span>)
                        if (i.flightCategory === "VFR")
                            return (<><span className="display-metar vfr">{i.rawText}</span><br/></>)
                        else if (i.flightCategory === "IFR")
                            return (<><span className="display-metar ifr">{i.rawText}</span><br/></>)
                        else
                            return (<><span className="display-metar lifr">{i.rawText}</span><br/></>)
                    })}
                        </>
                        )
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
                    <Row>
                        <Col md="12" className="px-3">
                            {displayMetars()}
                            <br/>
                        </Col>
                    </Row>

                    {checkIFR &&
                    <Form.Group as={Row} controlId="isInstrumentCurrent">
                        <Form.Label column md="4">Are you instrument Proficient and Current?</Form.Label>
                        <Form.Control as="select" column md="8" className="studentInfo" name="student_level"
                                      onChange={e => setIsInstrumentCurrent(e.target.value)}
                                      value={isInstrumentCurrent}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Control>
                    </Form.Group>
                    }
                    {requireWinds &&
                    <Form.Group as={Row} controlId="crosswind">
                        <Form.Label column md="4">The winds
                            are {currentWeather.winds}. {currentWeather.primaryRunway} has a
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

                    {currentWeather.pireps.length > 0 &&
                    <Form.Group as={Row}>
                        <Col md="12">
                            <h3 className="text-center">Pireps</h3>
                        </Col>
                        <Col md="12">
                            <Accordion>
                                {displayPireps}
                            </Accordion>
                        </Col>
                    </Form.Group>
                    }
                </Form>

            </Container>
        );
    }


    export default DynamicFormInput;
