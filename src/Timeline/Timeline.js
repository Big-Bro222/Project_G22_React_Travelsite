import React, { Component } from 'react';
import HorizontalTimeline from "react-horizontal-timeline"
import SwipeableViews from 'react-swipeable-views';
import { connect } from "react-redux";


class Timeline extends Component {
    constructor(props) {
        super(props);

    this.state = {
        value: 0,
        previous: 0,
    
        // Points: ["2019-01-04", "2019-01-05", "2019-01-06", "2019-01-07", "2019-01-08"]
    };
}

componentWillMount() {
    this.dates = this.props.content.map((entry) => entry.date);
  }
   
    

    render() {
        const views = this.props.content.map((entry, index) => {
            return (
              <div key={index}>
                { entry.component }
              </div>
            );
          });
        

        return (
            <div>
                {/* Bounding box for the Timeline */}
                <div>issisisi</div>
                <div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
                    <HorizontalTimeline
                        index={this.state.value}
                        indexClick={(index) => {
                            this.props.timelineClick(index);
                            this.setState({ value: index, previous: this.state.value });
                        }}
                        values={this.dates}
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
function mapStateToProps(state) {
    return {
        currentindex:state.currentindex,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        timelineClick: (value) => {
            const action = { type: "TIMELINE_CLICK", payload: value };
            dispatch(action);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timeline)
