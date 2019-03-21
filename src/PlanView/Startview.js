import React, { Component } from 'react';
import { Button } from 'antd';
import "./Startview.css"
import { connect } from "react-redux";


class Startview extends Component {
    state = {}
    addPlan = () => {
        var index = this.props.currentindex
        var newUI=this.props.UI
        newUI[index]="Search"
        this.props.addPlan(newUI)
        this.setState({UI:this.props.UI})
        console.log(newUI)
        console.log(this.props.UI)
    }
    render() {
        return (
            <div>
                <div>{this.state.UI}</div>
                <Button type="primary" shape="round" icon="edit" size={"large"} onClick={this.addPlan}>ADD YOUR PLAN</Button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        timeline: state.timeline,
        currentindex: state.currentindex,
        UI:state.UI
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPlan: (value) => {
            const action = { type: "ADD_PLAN", payload: value };
            dispatch(action);
            (console.log("input"))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Startview)
