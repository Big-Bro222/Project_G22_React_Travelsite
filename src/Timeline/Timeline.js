import React, { Component } from 'react';
import HorizontalTimeline from "react-horizontal-timeline"
import PlanItemView from "../PlanView/PlanItemView";

class Timeline extends Component {
    state = { 
        value: 0,
        previous: 0,
        Points:["2019-01-04","2019-01-05","2019-01-06","2019-01-07","2019-01-08"] 
     }
    render() { 
        return ( 
            <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ this.state.Points } 
            styles={{background: '#ffffff', foreground: '#40a9ff', outline: '#bae7ff'}}/>
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}    
          {this.state.value}
          <PlanItemView/>
         
        </div>
      </div>
         );
    }
}
 
export default Timeline;

