import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import PlanView from "./PlanView/PlanView";
import Side from "./Side/SideView";
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
      {/* <Route exact path = "/" component={Side} /> */}
      <Route exact path = "/" component={PlanView} /> 
      {/* <Route exact path = "/" component={Welcome} />  */}
      {/* <Route exact path = "/" component={DetailView} />  */}
      </div>
      </Provider>
    );
  }
}

export default App;
