import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import PlanView from "./PlanView/PlanView";
import PrintTimeline from "./PrintoutView/PrintoutView"
import SignIn from "./SignIn/SignIn";
import SignUp from "./Signup/Signup";
import { ProtectedRoute } from "./protected.route";

import './App.css';
import store from "./store";
import { Provider } from 'react-redux'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header>
         
        </header>
     
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <ProtectedRoute exact path="/app" component={Welcome} />
            <Route exact path = "/PlanView" component={PlanView} /> 
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>

      </div>
      </Provider>
    );
  }
}

export default App;
