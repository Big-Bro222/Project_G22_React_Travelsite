import React, { Component } from 'react';
// import Startview from "../PlanView/Startview";
import Search from "../Search/Search";
import MapView from "../MapSearch/MapView";
import { Button } from 'antd';
import DetailItem from "../Details/DetailsItem";
import { connect } from "react-redux";



class ViewSelection extends Component {
    // state = {UI:["PlanItemView","PlanItemView","PlanItemView"]
    // }

    // change the timeline view status to control the view display
    addPlan = () => {
        var index = this.props.currentindex
        var [...newUI]=this.props.UI
        newUI[index]="Search"
        this.props.addPlan(newUI)
        //this.setState({UI:this.props.UI})
        // console.log(newUI)
        // console.log(this.props.UI)
    }
    render() {
    
        switch (this.props.UI[this.props.currentindex]) {
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
            case "Map": {
                return (
                    <div>
                        <MapView />
                    </div>)
            }
            default:
                {
                    return (
                        <div>
                            <div>
                                {/* <div>{this.state.UI}</div> */}
                                <Button type="primary" shape="round" icon="edit" size={"large"} onClick={this.addPlan}>ADD YOUR PLAN</Button>
                            </div>
                        </div>)
                }
        }
    }
}
function mapStateToProps(state) {
    const{timeline,currentindex,UI}=state;
    return {
        timeline,
        currentindex,
        UI
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPlan: (value) => {
            const action = { type: "ADD_PLAN", payload: value };
            dispatch(action);
            // (console.log(value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewSelection)

