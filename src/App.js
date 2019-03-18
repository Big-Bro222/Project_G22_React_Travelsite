import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";

import Side from "./Side/SideView";
import Payment from "./Payment/Payment";
import DetailView from "./Details/DetailView";
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
      {/* <Route exact path = "/" component={QuickChoose} /> */}
      <Route exact path = "/Payment" component={Payment} />
      <Route exact path = "/Side" component={Side} />
      <Route exact path = "/Welcome" component={Welcome} /> 
      <Route exact path = "/" component={DetailView} /> 
      </div>
      </Provider>
    );
  }
}

export default App;
