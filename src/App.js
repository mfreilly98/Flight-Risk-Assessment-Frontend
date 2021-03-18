import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import RiskAssessmentForm from "./components/RiskAssessmentForm";
import AdminPanel from "./components/AdminPanel";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={RiskAssessmentForm}/>
                    <Route exact path="/AdminPanel" component={AdminPanel}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
