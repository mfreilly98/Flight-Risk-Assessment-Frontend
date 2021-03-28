import SearchStudent from "./SearchStudent";
import CurrentSettings from "./CurrentSettings";
import SetLimits from "./SetLimits";
import {Link} from "react-router-dom";
import './../stylesheets/AdminPanel.css';
import {Jumbotron, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import React from "react";

function AdminPanelRouter() {
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        <h1>Admin Panel</h1>
        <Link to="/AdminPanel/SearchStudent"><Button className="btn dash-btn">Search Students' Forms</Button></Link>
        <Link to="/AdminPanel/CurrentSettings"><Button className="btn dash-btn">Current Safety Limits</Button></Link>
        <Link to="/AdminPanel/SetLimits"><Button className="btn dash-btn">Set Safety Limits</Button></Link>
        <Link to="/"><Button className="btn dash-btn">Form</Button></Link>
      </Jumbotron>
      <Router>
				<Switch>
          <Route exact path="/AdminPanel/SearchStudent" component={withRouter(SearchStudent)} />
					<Route exact path="/AdminPanel/CurrentSettings" component={withRouter(CurrentSettings)} />
          <Route exact path="/AdminPanel/SetLimits" component={withRouter(SetLimits)} />
        </Switch>
			</Router>
    </div>
  );
}

export default AdminPanelRouter;