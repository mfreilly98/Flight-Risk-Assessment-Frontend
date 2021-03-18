import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './../stylesheets/AdminPanel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Row, Col, Form, FormGroup, Button, Container} from 'react-bootstrap';

class AdminPanel extends Component{
    
    constructor(props) {
        super(props);

        this.state = ({ ifr: {
                            departure: {
                                ceilingDay: {low: 1000, med: 800, high: 600},
                                ceilingNight: {low: 1500, med: 1200, high: 1000},
                                visibility: {low: 4, med: 3, high: 2},
                                bestIAP: {low: 'Precision', med: 'Pon-Prec', high: 'Circling'},
                                totalWind: {low: 15, med: 20, high: 25},
                                gustIncr: {low: 5, med: 8, high: 10},
                                crosswind: {low: 5, med: 10, high: 15},
                            },
                            enroute: {
                                ceilingDay: {low: 1000, med: 800, high: 600},
                                ceilingNight: {low: 1500, med: 1200, high: 1000},
                                visibility: {low: 4, med: 3, high: 2},
                                time: {low: 45, med: 90},
                                thunderstorm: {low: 10, med: 29},
                                fuelAlt: {low: 90, med: 76, high: 60},
                                altAirfield: {low: 3, med: 2, high: 1},
                            },
                            destination: {
                                ceilingDay: {low: 1000, med: 800, high: 600},
                                ceilingNight: {low: 1500, med: 1200, high: 1000},
                                visibility: {low: 4, med: 3, high: 2},
                                bestIAP: {low: 'Precision', med: 'Non-Prec', high: 'Circling'},
                                totalWind: {low: 15, med: 20, high: 25},
                                gustIncr: {low: 5, med: 8, high: 10},
                                crosswind: {low: 5, med: 10, high: 15},
                            },
                            physiology: {
                                flightTime: {low: 'Day', med: 'Dusk', high: 'Night'},
                                flightBegan: {low: 0, med: 1, high: 2},
                                prevFlights: {low: 4, med: 3, high: 2},
                                syllabus: {low: 'Normal', med: 'Stage Check', high: 'FAA Check'},
                                outsideTemp: {},
                            },
                        },
                        vfr: {
                            localPattern: {
                                ceilingDayDual: {low: 2500, med: 2000, high: 1500},
                                ceilingDaySolo: {low: 3000, med: 2500, high: 2000},
                                ceilingNight: {low: 4000, med: 3500, high: 3000},
                                visibilityDay: {low: 5, med: 4, high: 3},
                                visibilityNight: {low: 7, med: 6, high: 5},
                                totalWind: {low: 15, med: 20, high: 25},
                                gustIncr: {low: 5, med: 8, high: 10},
                                crosswind: {low: 5, med: 10, high: 15},
                            },
                            departure: {
                                ceiling: {low: 4000, med: 3500, high: 3000},
                                visibility: {low: 7, med: 6, high: 5},
                                totalWind: {low: 15, med: 20, high: 25},
                                gustIncr: {low: 5, med: 8, high: 10},
                                crosswind: {low: 5, med: 10, high: 15},
                            },
                            enroute: {
                                ceiling: {low: 4000, med: 3500, high: 3000},
                                visibility: {low: 7, med: 6, high: 5},
                                checkpoints: {low: 'Multiple', med: 'Moderate', high: 'Few to none'},
                                time: {low: 60, med: 120},
                                fuelAlt: {low: 60, med: 46, high: 30}
                            },
                            destination: {
                                ceiling: {low: 4000, med: 3500, high: 3000},
                                visibility: {low: 7, med: 6, high: 5},
                                totalWind: {low: 15, med: 20, high: 25},
                                gustIncr: {low: 5, med: 8, high: 10},
                                crosswind: {low: 5, med: 10, high: 15},
                            },
                            physiology: {
                                flightTime: {low: 1000, med: 800, high: 600},
                                flightBegan: {low: 1500, med: 1200, high: 1000},
                                prevFlights: {low: 4, med: 3, high: 2},
                                syllabus: {low: 'Normal', med: 'Stage Check', high: 'FAA Check'},
                                outsideTemp: {},
                            },
                            soloFactors: {
                                flightLocation: {low: 'Local Area', med: 'Aux Field', high: 'Cross Country'},
                                GndRefernceManuevers: {low: 0, med: 1, high: 2},
                                experience: {low: 15, med: 10, high: 5},
                                lastLandingPriv: {low: 4, med: 9, high: 14},
                                lastLandingComm: {low: 14, med: 28, high: 45},
                            }
                        },
                        page: "student",
                        current: "IFR"});
        
        this.set = this.set.bind(this);
        this.switchView = this.switchView.bind(this);
    }

    set(toSet, value) {
        
    }

    switchView(panel){
        this.setState({page: panel});
    }

    switchCurrent(panel){
        this.setState({current: panel});
    }

    SearchStudentForms() {
        return (
            <Form inline className="section">
            <Form.Row>
                <h3 className="section">Search for student's submitted forms</h3>
                <FormGroup as={Row} className="section">
                    <Form.Label>Student's Name: </Form.Label>
                    <Form.Control type="text"></Form.Control>
                    <Button className="btn btn-default">Search</Button>
                </FormGroup>
            </Form.Row>
            </Form>
        );
    }

    vfrDisplay() {
        return (
            <div>
            <h2>VFR Current Safety Limits</h2>
            <Row>
                <h3>Local Pattern</h3>
                <Row>
                    <b>Ceiling Day Solo</b>
                    <p>low: {this.state.vfr.localPattern.ceilingDaySolo.low} | med: {this.state.vfr.localPattern.ceilingDaySolo.med} | high: {this.state.vfr.localPattern.ceilingDaySolo.high}</p>
                    <b>Ceiling Day</b>
                    <p>low: {this.state.vfr.localPattern.ceilingDayDual.low} | med: {this.state.vfr.localPattern.ceilingDayDual.med} | high: {this.state.vfr.localPattern.ceilingDayDual.high}</p>
                    <b>Ceiling Night</b>
                    <p>low: {this.state.vfr.localPattern.ceilingNight.low} | med: {this.state.vfr.localPattern.ceilingNight.med} | high: {this.state.vfr.localPattern.ceilingNight.high}</p>
                    <b>Visibility Day</b>
                    <p>low: {this.state.vfr.localPattern.visibilityDay.low} | med: {this.state.vfr.localPattern.visibilityDay.med} | high: {this.state.vfr.localPattern.visibilityDay.high}</p>
                    <b>Visibility Night</b>
                    <p>low: {this.state.vfr.localPattern.visibilityNight.low} | med: {this.state.vfr.localPattern.visibilityNight.med} | high: {this.state.vfr.localPattern.visibilityNight.high}</p>
                    <b>Total Wind</b>
                    <p>low: {this.state.vfr.localPattern.totalWind.low} | med: {this.state.vfr.localPattern.totalWind.med} | high: {this.state.vfr.localPattern.totalWind.high}</p>
                    <b>Gust Increment</b>
                    <p>low: {this.state.vfr.localPattern.gustIncr.low} | med: {this.state.vfr.localPattern.gustIncr.med} | high: {this.state.vfr.localPattern.gustIncr.high}</p>
                    <b>Cross Wind</b>
                    <p>low: {this.state.vfr.localPattern.crosswind.low} | med: {this.state.vfr.localPattern.crosswind.med} | high: {this.state.vfr.localPattern.crosswind.high}</p>
                </Row>
                <h3>Departure</h3>
                <Row>
                    <b>Ceiling</b>
                    <p>low: {this.state.vfr.departure.ceiling.low} | med: {this.state.vfr.departure.ceiling.med} | high: {this.state.vfr.departure.ceiling.high}</p>
                    <b>Visibility</b>
                    <p>low: {this.state.vfr.departure.visibility.low} | med: {this.state.vfr.departure.visibility.med} | high: {this.state.vfr.departure.visibility.high}</p>
                    <b>Total Wind</b>
                    <p>low: {this.state.vfr.departure.totalWind.low} | med: {this.state.vfr.departure.totalWind.med} | high: {this.state.vfr.departure.totalWind.high}</p>
                    <b>Gust Increment</b>
                    <p>low: {this.state.vfr.departure.gustIncr.low} | med: {this.state.vfr.departure.gustIncr.med} | high: {this.state.vfr.departure.gustIncr.high}</p>
                    <b>Cross Wind</b>
                    <p>low: {this.state.vfr.departure.crosswind.low} | med: {this.state.vfr.departure.crosswind.med} | high: {this.state.vfr.departure.crosswind.high}</p>
                </Row>
                <h3>Enroute</h3>
                <Row>
                    <b>Ceiling Day</b>
                    <p>low: {this.state.vfr.enroute.ceiling.low} | med: {this.state.vfr.enroute.ceiling.med} | high: {this.state.vfr.enroute.ceiling.high}</p>
                    <b>Visibility</b>
                    <p>low: {this.state.vfr.enroute.visibility.low} | med: {this.state.vfr.enroute.visibility.med} | high: {this.state.vfr.enroute.visibility.high}</p>
                    <b>checkpoints</b>
                    <p>low: {this.state.vfr.enroute.checkpoints.low} | med: {this.state.vfr.enroute.checkpoints.med} | high: {this.state.vfr.enroute.checkpoints.high}</p>
                    <b>time</b>
                    <p>low: {this.state.vfr.enroute.time.low} | med: {this.state.vfr.enroute.time.med} | high: {'>'} {this.state.vfr.enroute.time.med}</p>
                    <b>fuelAlt</b>
                    <p>low: {this.state.vfr.enroute.fuelAlt.low} | med: {this.state.vfr.enroute.fuelAlt.med} | high: {this.state.vfr.enroute.fuelAlt.high}</p>
                </Row>
                <h3>Destination</h3>
                <Row>
                    <b>Ceiling</b>
                    <p>low: {this.state.vfr.destination.ceiling.low} | med: {this.state.vfr.destination.ceiling.med} | high: {this.state.vfr.destination.ceiling.high}</p>
                    <b>Visibility</b>
                    <p>low: {this.state.vfr.destination.visibility.low} | med: {this.state.vfr.destination.visibility.med} | high: {this.state.vfr.destination.visibility.high}</p>
                    <b>Total Wind</b>
                    <p>low: {this.state.vfr.destination.totalWind.low} | med: {this.state.vfr.destination.totalWind.med} | high: {this.state.vfr.destination.totalWind.high}</p>
                    <b>Gust Increment</b>
                    <p>low: {this.state.vfr.destination.gustIncr.low} | med: {this.state.vfr.destination.gustIncr.med} | high: {this.state.vfr.destination.gustIncr.high}</p>
                    <b>Cross Wind</b>
                    <p>low: {this.state.vfr.destination.crosswind.low} | med: {this.state.vfr.destination.crosswind.med} | high: {this.state.vfr.destination.crosswind.high}</p>
                </Row>
                <h3>Physiology</h3>
                <Row>
                    <b>flightTime</b>
                    <p>low: {this.state.vfr.physiology.flightTime.low} | med: {this.state.vfr.physiology.flightTime.med} | high: {this.state.vfr.physiology.flightTime.high}</p>
                    <b>flightBegan</b>
                    <p>low: {this.state.vfr.physiology.flightBegan.low} | med: {this.state.vfr.physiology.flightBegan.med} | high: {this.state.vfr.physiology.flightBegan.high}</p>
                    <b>prevFlights</b>
                    <p>low: {this.state.vfr.physiology.prevFlights.low} | med: {this.state.vfr.physiology.prevFlights.med} | high: {this.state.vfr.physiology.prevFlights.high}</p>
                    <b>syllabus</b>
                    <p>low: {this.state.vfr.physiology.syllabus.low} | med: {this.state.vfr.physiology.syllabus.med} | high: {this.state.vfr.physiology.syllabus.high}</p>
                    {/*<b>Temp</b>
                    <p>low: {this.state.vfr.departure.totalWind.low} | med: {this.state.vfr.departure.totalWind.med} | high: {this.state.vfr.departure.totalWind.high}</p>*/}
                </Row>
                <h3>Solo Factors</h3>
                <Row>
                    <b>Flight Location</b>
                    <p>low: {this.state.vfr.soloFactors.flightLocation.low} | med: {this.state.vfr.soloFactors.flightLocation.med} | high: {this.state.vfr.soloFactors.flightLocation.high}</p>
                    <b>GndRefernceManuevers</b>
                    <p>low: {this.state.vfr.soloFactors.GndRefernceManuevers.low} | med: {this.state.vfr.soloFactors.GndRefernceManuevers.med} | high: {this.state.vfr.soloFactors.GndRefernceManuevers.high}</p>
                    <b>experience</b>
                    <p>low: {this.state.vfr.soloFactors.experience.low} | med: {this.state.vfr.soloFactors.experience.med} | high: {this.state.vfr.soloFactors.experience.high}</p>
                    <b>lastLandingPriv</b>
                    <p>low: {this.state.vfr.soloFactors.lastLandingPriv.low} | med: {this.state.vfr.soloFactors.lastLandingPriv.med} | high: {this.state.vfr.soloFactors.lastLandingPriv.high}</p>
                    <b>lastLandingComm</b>
                    <p>low: {this.state.vfr.soloFactors.lastLandingComm.low} | med: {this.state.vfr.soloFactors.lastLandingComm.med} | high: {this.state.vfr.soloFactors.lastLandingComm.high}</p>
                </Row>
            </Row>
            </div>
        )
    }

    ifrDisplay() {
        return (
            <div>
            <h2>IFR Current Safety Limits</h2>
            <Row>
                <h3>Departure</h3>
                <Row>
                    <b>Ceiling Day</b>
                    <p>low: {this.state.ifr.departure.ceilingDay.low} | med: {this.state.ifr.departure.ceilingDay.med} | high: {this.state.ifr.departure.ceilingDay.high}</p>
                    <b>Ceiling Night</b>
                    <p>low: {this.state.ifr.departure.ceilingNight.low} | med: {this.state.ifr.departure.ceilingNight.med} | high: {this.state.ifr.departure.ceilingNight.high}</p>
                    <b>Visibility</b>
                    <p>low: {this.state.ifr.departure.visibility.low} | med: {this.state.ifr.departure.visibility.med} | high: {this.state.ifr.departure.visibility.high}</p>
                    <b>Best IAP</b>
                    <p>low: {this.state.ifr.departure.bestIAP.low} | med: {this.state.ifr.departure.bestIAP.med} | high: {this.state.ifr.departure.bestIAP.high}</p>
                    <b>Total Wind</b>
                    <p>low: {this.state.ifr.departure.totalWind.low} | med: {this.state.ifr.departure.totalWind.med} | high: {this.state.ifr.departure.totalWind.high}</p>
                    <b>Gust Increment</b>
                    <p>low: {this.state.ifr.departure.gustIncr.low} | med: {this.state.ifr.departure.gustIncr.med} | high: {this.state.ifr.departure.gustIncr.high}</p>
                    <b>Cross Wind</b>
                    <p>low: {this.state.ifr.departure.crosswind.low} | med: {this.state.ifr.departure.crosswind.med} | high: {this.state.ifr.departure.crosswind.high}</p>
                </Row>
                <h3>Enroute</h3>
                <Row>
                    <b>Ceiling Day</b>
                    <p>low: {this.state.ifr.enroute.ceilingDay.low} | med: {this.state.ifr.enroute.ceilingDay.med} | high: {this.state.ifr.enroute.ceilingDay.high}</p>
                    <b>Ceiling Night</b>
                    <p>low: {this.state.ifr.enroute.ceilingNight.low} | med: {this.state.ifr.enroute.ceilingNight.med} | high: {this.state.ifr.enroute.ceilingNight.high}</p>
                    <b>Visibility</b>
                    <p>low: {this.state.ifr.enroute.visibility.low} | med: {this.state.ifr.enroute.visibility.med} | high: {this.state.ifr.enroute.visibility.high}</p>
                    <b>Time</b>
                    <p>low: {this.state.ifr.enroute.time.low} | med: {this.state.ifr.enroute.time.med} | high: {'>'} {this.state.ifr.enroute.time.med}</p>
                    <b>Thunderstorm</b>
                    <p>low: {this.state.ifr.enroute.thunderstorm.low} | med: {this.state.ifr.enroute.thunderstorm.med} | high: {'>'} {this.state.ifr.enroute.thunderstorm.med}</p>
                    <b>fuelAlt</b>
                    <p>low: {this.state.ifr.enroute.fuelAlt.low} | med: {this.state.ifr.enroute.fuelAlt.med} | high: {this.state.ifr.enroute.fuelAlt.high}</p>
                    <b>altAirfield</b>
                    <p>low: {this.state.ifr.enroute.altAirfield.low} | med: {this.state.ifr.enroute.altAirfield.med} | high: {this.state.ifr.enroute.altAirfield.high}</p>
                </Row>
                <h3>Destination</h3>
                <Row>
                    <b>Ceiling Day</b>
                    <p>low: {this.state.ifr.destination.ceilingDay.low} | med: {this.state.ifr.destination.ceilingDay.med} | high: {this.state.ifr.destination.ceilingDay.high}</p>
                    <b>Ceiling Night</b>
                    <p>low: {this.state.ifr.destination.ceilingNight.low} | med: {this.state.ifr.destination.ceilingNight.med} | high: {this.state.ifr.destination.ceilingNight.high}</p>
                    <b>Visibility</b>
                    <p>low: {this.state.ifr.destination.visibility.low} | med: {this.state.ifr.destination.visibility.med} | high: {this.state.ifr.destination.visibility.high}</p>
                    <b>Best IAP</b>
                    <p>low: {this.state.ifr.destination.bestIAP.low} | med: {this.state.ifr.destination.bestIAP.med} | high: {this.state.ifr.destination.bestIAP.high}</p>
                    <b>Total Wind</b>
                    <p>low: {this.state.ifr.destination.totalWind.low} | med: {this.state.ifr.destination.totalWind.med} | high: {this.state.ifr.destination.totalWind.high}</p>
                    <b>Gust Increment</b>
                    <p>low: {this.state.ifr.destination.gustIncr.low} | med: {this.state.ifr.destination.gustIncr.med} | high: {this.state.ifr.destination.gustIncr.high}</p>
                    <b>Cross Wind</b>
                    <p>low: {this.state.ifr.destination.crosswind.low} | med: {this.state.ifr.destination.crosswind.med} | high: {this.state.ifr.destination.crosswind.high}</p>
                </Row>
                <h3>Physiology</h3>
                <Row>
                    <b>flightTime</b>
                    <p>low: {this.state.ifr.physiology.flightTime.low} | med: {this.state.ifr.physiology.flightTime.med} | high: {this.state.ifr.physiology.flightTime.high}</p>
                    <b>flightBegan</b>
                    <p>low: {this.state.ifr.physiology.flightBegan.low} | med: {this.state.ifr.physiology.flightBegan.med} | high: {this.state.ifr.physiology.flightBegan.high}</p>
                    <b>prevFlights</b>
                    <p>low: {this.state.ifr.physiology.prevFlights.low} | med: {this.state.ifr.physiology.prevFlights.med} | high: {this.state.ifr.physiology.prevFlights.high}</p>
                    <b>syllabus</b>
                    <p>low: {this.state.ifr.physiology.syllabus.low} | med: {this.state.ifr.physiology.syllabus.med} | high: {this.state.ifr.physiology.syllabus.high}</p>
                    {/*<b>Temp</b>
                    <p>low: {this.state.ifr.departure.totalWind.low} | med: {this.state.ifr.departure.totalWind.med} | high: {this.state.ifr.departure.totalWind.high}</p>*/}
                </Row>
            </Row>
            </div>
        )
    }

    CurrentSettings() {
        let display;
        if (this.state.current === "IFR"){
            display = this.ifrDisplay();
        }
        else {
            display = this.vfrDisplay();
        }
        return (
            <Row className="section">
                <Row>
                    <Button as={Col} className="btn dash-btn" onClick={this.switchCurrent.bind(this, "IFR")}>IFR Safety Limits</Button>
                    <Button as={Col} className="btn dash-btn" onClick={this.switchCurrent.bind(this, "VFR")}>VFR Safety Limits</Button>
                </Row>
                {display}
            </Row>
        )
    }

    SetLimits() {
	    return (
            <Form inline className="section">
                <h3>Set safety limilts</h3>
                <h5>Cross Winds (knots)</h5>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Max safe limit: </Form.Label>
                        <Form.Control type="number" onChange={e => this.setState({setMaxCross: e.target.value})}></Form.Control>
                        <Button className="btn btn-default" onClick={this.set.bind(this, "maxCross", this.state.setMaxCross)}>Set</Button>
                    </FormGroup>
                </Form.Row>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Mid safe limit: </Form.Label>
                        <Form.Control type="number" onChange={e => this.setState({setMidCross: e.target.value})}></Form.Control>
                        <Button className="btn btn-default" onClick={this.set.bind(this, "midCross", this.state.setMidCross)}>Set</Button>
                    </FormGroup>
                </Form.Row>
                <h5>Visibility (statue miles)</h5>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Max safe limit: </Form.Label>
                        <Form.Control type="number" onChange={e => this.setState({setMaxVis: e.target.value})}></Form.Control>
                        <Button className="btn btn-default" onClick={this.set.bind(this, "maxVis", this.state.setMaxVis)}>Set</Button>
                    </FormGroup>
                </Form.Row>
                <Form.Row>
                    <FormGroup>
                        <Form.Label>Mid safe limit: </Form.Label>
                        <Form.Control type="number" onChange={e => this.setState({setMidVis: e.target.value})}></Form.Control>
                        <Button className="btn btn-default" onClick={this.set.bind(this, "midVis", this.state.setMidVis)}>Set</Button>
                    </FormGroup>
                </Form.Row>
            </Form>
        )
    }

    render() {
        let display;
        if (this.state.page === "student") {
            display = this.SearchStudentForms();
        }
        if (this.state.page === "current") {
            display = this.CurrentSettings();
        }
        if (this.state.page === "set") {
            display = this.SetLimits();
        }
        return (
            <div>
                <Jumbotron fluid className="jumbo">
                    <h1>Admin Panel</h1>
                    <Button className="btn dash-btn" onClick={this.switchView.bind(this, "student")}>Search Students' Forms</Button>
                    <Button className="btn dash-btn" onClick={this.switchView.bind(this, "current")}>Current Safety Limits</Button>
                    <Button className="btn dash-btn" onClick={this.switchView.bind(this, "set")}>Set Safety Limits</Button>
                    <Link to="/"><Button className="btn dash-btn">Form</Button></Link>
                </Jumbotron>
                {display}
            </div>
        );
    }
}

export default AdminPanel;
