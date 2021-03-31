import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import RiskAssessmentForm from "./components/RiskAssessmentForm";
import AdminPanel from "./components/AdminPanel";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import DynamicFormInput from "./components/DynamicFormInput";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={RiskAssessmentForm}/>
                    <Route exact path="/AdminPanel" component={AdminPanel}/>
                    <Route exact path="/DynamicQuestions" component={DynamicFormInput} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
