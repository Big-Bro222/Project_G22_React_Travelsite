import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import QuickChoose from "./QuickChoose/QuickChoose";
import Side from "./Side/SideView";
import Payment from "./Payment/Payment";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         
        </header>
     

      {/* Router */}
      {/* <Route exact path = "/" component={QuickChoose} /> */}
      {/* <Route exact path = "/" component={Payment} /> */}
      <Route exact path = "/" component={Side} />
      </div>
    );
  }
}

export default App;
