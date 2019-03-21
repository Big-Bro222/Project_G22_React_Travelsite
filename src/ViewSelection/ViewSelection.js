import React, { Component } from 'react';
// import Startview from "../PlanView/Startview";
import Search from "../Search/Search";
import { Button } from 'antd';
import DetailItem from "../Details/DetailsItem";
import { connect } from "react-redux";



class ViewSelection extends Component {
    state = {UI:["PlanItemView","PlanItemView","PlanItemView"]
    }
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
        console.log()
        switch (this.state.UI[this.props.currentindex]) {
            case "DetailItem": {
                return (
                    <div>
                        <DetailItem />
                    </div>)
            }
            case "Search": {
                return (
                    <div>

                        <Search />
                    </div>)
            }
            default:
                {
                    return (
                        <div>
                            <div>
                                <div>{this.state.UI}</div>
                                <Button type="primary" shape="round" icon="edit" size={"large"} onClick={this.addPlan}>ADD YOUR PLAN</Button>
                            </div>
                        </div>)
                }
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewSelection)

