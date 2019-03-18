import React, { Component } from 'react';
// import {  } from 'antd';
import QuickResultItem from "../QuickResult/QuickResultItem";


class SideView extends Component {
    
    state = { 
      title: "Flight",
     }

    render() { 
        return ( 
            <div style={{ width: "100%" }}>
            <h2>{this.state.title + this.props.departureplace}</h2>
            <QuickResultItem/>
            <QuickResultItem/>
            <QuickResultItem/>
      </div>
         );
    }
}
 
export default SideView;