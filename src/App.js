import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import PlanView from "./PlanView/PlanView";
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
     

      {/* Router */}
      <Route exact path = "/" component={Welcome} /> 

      <Route exact path = "/PlanView" component={PlanView} /> 
      </div>
      </Provider>
    );
  }
}

export default App;
