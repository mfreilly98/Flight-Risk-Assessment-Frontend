import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import RiskAssessmentForm from "./components/RiskAssessmentForm";
import AdminPanelRouter from "./components/AdminPanelRouter";
import SearchStudent from "./components/SearchStudent";
import CurrentSettings from "./components/CurrentSettings";
import SetLimits from "./components/SetLimits";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";

function App() {
  return (
      <div className="App">
        <Router>
					<Switch>
            <Route exact path="/" component={RiskAssessmentForm} />
						<Route exact path="/AdminPanel/SearchStudent" component={SearchStudent} />
            <Route exact path="/AdminPanel/CurrentSettings" component={CurrentSettings} />
            <Route exact path="/AdminPanel/SetLimits" component={SetLimits} />
          </Switch>
				</Router>
      </div>
  );
}

export default App;
