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

        };
    }

    componentWillMount() {
        if (this.props.content)
            this.dates = this.props.content.map((entry) => entry.date);
    }

    render() {
        if (this.props.content) {
            var views = this.props.content.map((entry, index) => {
                return (
                    <div key={index}>
                        {entry.component}
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
                                this.props.timelineClick(index);
                            }}
                            values={this.dates}
                            styles={{ background: '#ffffff', foreground: '#40a9ff', outline: '#bae7ff' }} />
                    </div>
                    <div className='text-center'>
                        {/* any arbitrary component can go here */}
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={(value, previous) => {
                                this.setState({ value: value, previous: previous });
                            }}
                            resistance>
                            {views}
                        </SwipeableViews>
                    </div>
                </div>
            );
        }
        else
            return (<div></div>)
    }
}
function mapStateToProps(state) {
    return {
        currentindex: state.currentindex,
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
