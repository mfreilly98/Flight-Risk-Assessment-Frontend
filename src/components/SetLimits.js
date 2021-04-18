import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './../stylesheets/AdminPanel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Row, Form, FormGroup, Button} from 'react-bootstrap';

// This component allows admins to set the safety limits for the application.
class SetLimits extends Component {

  constructor(props){
    super(props)

    this.state = ({group: "ifr", category: "departure", max: "", items: [], loaded: false,})

    this.change = this.change.bind(this)
  }

  componentDidMount() {
    fetch("/adminThresholds")
      .then(res => res.json())
      .then(
          (result) => {
            this.setState({items: result})
          }
      )
      this.setState({loaded: true})
    }

  // This function takes in a string and switches the subcategory that is being displayed.
  switch(panel){
    this.setState({category: panel})
  }

  // This function takes in a string and switches the category that is being displayed and sets the subcategory to its default.
  switchCurrent(panel){
    this.setState({group: panel})
    if (panel === "ifr"){
      this.setState({category: "departure"})
    }
    else {
      this.setState({category: "localPattern"}) 
    }
  }

  change(e){
    this.setState({max: e.target.value})
  }

  // This function updates the safety limits in the database with the value given.
  update(limit, value, event){
    console.log("group: ", this.state.group)
    console.log("category: ", this.state.category)
    console.log("group: ", event.target.name)
    console.log("limit: ", limit)
    console.log("value: ", this.state.max)
  }

  display(){
    const itemList = this.state.items.map((item) =>{
      if(item.ranges !== null && item.group === this.state.group && item.category === this.state.category)
        return <div key={item.name}>
            <h5><b>{item.name}</b></h5>
            <Form.Row>
              <FormGroup>
                <Form.Label>Max: </Form.Label>
                <Form.Control type="number" onChange={this.change} ></Form.Control>
                <Button name={item.name} className="btn btn-default" onClick={this.update.bind(this, "max", "value")}>Set</Button>
              </FormGroup>
            </Form.Row>
            <Form.Row>
              <FormGroup>
                <Form.Label>Mid: </Form.Label>
                <Form.Control type="number"></Form.Control>
                <Button name={item.name} className="btn btn-default" onClick={this.update.bind(this, "mid", "value")}>Set</Button>
              </FormGroup>
            </Form.Row>
            <Form.Row>
              <FormGroup>
                <Form.Label>Low: </Form.Label>
                <Form.Control type="number"></Form.Control>
                <Button name={item.name} className="btn btn-default" onClick={this.update.bind(this, "low", "value")}>Set</Button>
              </FormGroup>
            </Form.Row>
          </div>
    })
    if (this.state.group === "ifr"){
      return (
        <Form inline className="section">
        <div>
        <Row>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "departure")}>departure</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "enroute")}>enroute</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "destination")}>destination</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "physiology")}>physiology</Button>
        </Row>
        <h1>{this.state.category}</h1>
        {itemList}
      </div>
        </Form>
      )}
    else{
      return (
        <Form inline className="section">
        <div>
        <Row>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "localPattern")}>localPattern</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "departure")}>departure</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "enroute")}>enroute</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "destination")}>destination</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "physiology")}>physiology</Button>
          <Button className="btn dash-btn" onClick={this.switch.bind(this, "soloFactors")}>soloFactors</Button>
        </Row>
        <h1>{this.state.category}</h1>
        {itemList}
      </div>
        </Form>
      )}
  }

  // This renders the jumbotron and displays the current form of the limits being modified.
  render() {
    if (this.state.loaded == true){
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
              <Button className="btn dash-btn" onClick={this.switchCurrent.bind(this, "ifr")}>IFR Safety Limits</Button>
              <Button className="btn dash-btn" onClick={this.switchCurrent.bind(this, "vfr")}>VFR Safety Limits</Button>
            </Row>
            {this.display()}
          </Row>
        </div>
      )
    }
    else {
      return(<div>The page is loading</div>)
    }
  }
}
export default SetLimits;