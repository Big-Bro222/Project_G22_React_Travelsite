import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import PlanView from "./PlanView/PlanView";
import Side from "./Side/SideView";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         
        </header>
     

      {/* Router */}
      {/* <Route exact path = "/" component={Side} /> */}
      <Route exact path = "/" component={PlanView} /> 
      {/* <Route exact path = "/" component={Welcome} />  */}
      {/* <Route exact path = "/" component={DetailView} />  */}
      </div>
    );
  }
}

export default App;
