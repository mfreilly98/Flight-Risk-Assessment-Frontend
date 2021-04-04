import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './../stylesheets/AdminPanel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Row, Form, FormGroup, Button} from 'react-bootstrap';

class SetLimits extends Component {

constructor(props){
  super(props)

  this.state = ({settings: "IFR"},
                {type: "departure"})
}

switch(panel){
  this.setState({type: panel})
}

switchCurrent(panel){
    this.setState({settings: panel})
    if (panel === "IFR"){
      this.setState({type: "departure"})
    }
    else {
      this.setState({type: "localPattern"}) 
    }
}

form(items){
  let itemList=[]
  items.forEach((item)=>{
    itemList.push(
    <div key={item}>
      <h5><b>{item}</b></h5>
      <Form.Row>
        <FormGroup>
          <Form.Label>Max: </Form.Label>
          <Form.Control type="number"></Form.Control>
          <Button className="btn btn-default">Set</Button>
        </FormGroup>
      </Form.Row>
      <Form.Row>
        <FormGroup>
          <Form.Label>Mid: </Form.Label>
          <Form.Control type="number"></Form.Control>
          <Button className="btn btn-default">Set</Button>
        </FormGroup>
      </Form.Row>
      <Form.Row>
        <FormGroup>
          <Form.Label>Low: </Form.Label>
          <Form.Control type="number"></Form.Control>
          <Button className="btn btn-default">Set</Button>
        </FormGroup>
      </Form.Row>
    </div>
    )
  })
  return (
    <Form inline className="section">
    {itemList}
    </Form>
  )
}

ifr(){
  let type
  if (this.state.type === "departure"){
    type = this.form(['ceilingDay','ceilingNight','visibility','totalWind','gustIncr','crosswind'])
  }
  else if (this.state.type === "enroute"){
    type = this.form(['ceilingDay','ceilingNight','visibility','time','thunderstorm','fuelAlt','altAirfield'])
  }
  else if (this.state.type === "destination"){
    type = this.form(['ceilingDay','ceilingNight','visibility','totalWind','gustIncr','crosswind'])
  }
  else if (this.state.type === "physiology"){
    type = this.form(['flightTime','flightBegan','prevFlights','outsideTemp'])
  }
  return(
    <div>
      <Row>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "departure")}>departure</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "enroute")}>enroute</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "destination")}>destination</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "physiology")}>physiology</Button>
        </Row>
      {type}
    </div>
  )
}

vfr(){
  let type
  if (this.state.type === "localPattern"){
    type = this.form(['ceilingDayDual','ceilingDaySolo','ceilingNight','visibilityDay','visibilityNight','totalWind','gustIncr','crosswind'])
  }
  else if (this.state.type === "departure"){
    type = this.form(['ceiling','visibility','totalWind','gustIncr','crosswind'])
  }
  else if (this.state.type === "enroute"){
    type = this.form(['ceiling','visibility','time','fuelAlt'])
  }
  else if (this.state.type === "destination"){
    type = this.form(['ceiling','visibility','totalWind','gustIncr','crosswind'])
  }
  else if (this.state.type === "physiology"){
    type = this.form(['flightTime','flightBegan','prevFlights','outsideTemp'])
  }
  else if (this.state.type === "soloFactors"){
    type = this.form(['GndRefernceManuevers','experience','lastLandingPriv','lastLandingComm'])
  }
  return(
    <div>
      <Row>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "localPattern")}>localPattern</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "departure")}>departure</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "enroute")}>enroute</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "destination")}>destination</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "physiology")}>physiology</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "soloFactors")}>soloFactors</Button>
        </Row>
      {type}
    </div>
  )
}

render() {
  let display
  if (this.state.settings === "VFR"){
    display = this.vfr()
  }
  else {
    display = this.ifr()
  }
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        <h1>Admin Panel</h1>
        <Link to="/AdminPanel/SearchStudent"><Button className="btn dash-btn">Search Students' Forms</Button></Link>
        <Link to="/AdminPanel/CurrentSettings"><Button className="btn dash-btn">Current Safety Limits</Button></Link>
        <Link to="/AdminPanel/SetLimits"><Button className="btn dash-btn">Set Safety Limits</Button></Link>
      </Jumbotron>
      <Row className="section">
        <Row>
          <Button className="btn dash-btn" onClick={this.switchCurrent.bind(this, "IFR")}>IFR Safety Limits</Button>
          <Button className="btn dash-btn" onClick={this.switchCurrent.bind(this, "VFR")}>VFR Safety Limits</Button>
        </Row>
        {display}
      </Row>
    </div>
  )
}
}
export default SetLimits;