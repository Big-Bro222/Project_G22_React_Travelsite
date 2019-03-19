import React, { Component } from 'react';
import HorizontalTimeline from "react-horizontal-timeline"
import PlanItemView from "../PlanView/PlanItemView";
import SwipeableViews from 'react-swipeable-views';


class Timeline extends Component {
    constructor(props) {
        super(props);

    this.state = {
        value: 0,
        previous: 0,
        Points: ["2019-01-04", "2019-01-05", "2019-01-06", "2019-01-07", "2019-01-08"]
    };
}

    // getViews(){
    //     for (let i = 0; i < this.state.Points.length; i++) {
           
    //     }
    // }
   
    

    render() {
        const views = this.state.Points.map((date, index) => {
            return (
              <div className='container' key={index}>
                { this.props.content }
              </div>
            );
          });
        

        return (
            <div>
                {/* Bounding box for the Timeline */}
                <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
                    <HorizontalTimeline
                        index={this.state.value}
                        indexClick={(index) => {
                            this.setState({ value: index, previous: this.state.value });
                        }}
                        values={this.state.Points}
                        styles={{ background: '#ffffff', foreground: '#40a9ff', outline: '#bae7ff' }} />
                </div>
                <div className='text-center'>
                    {/* any arbitrary component can go here */}
                    {this.state.value}
                    <SwipeableViews
                        index={this.state.value}
                        onChangeIndex={(value, previous) => {
                            this.setState({ value: value, previous: previous });
                        }}
                        resistance>
                        {views}
                    </SwipeableViews>
                    
                    {/* <PlanItemView /> */}

                </div>
            </div>
        );
    }
}

export default Timeline;
