import React, { Component } from 'react';
import Search from "../Search/Search";
import MapView from "../MapSearch/MapView";
import { Button } from 'antd';
import DetailItem from "../Details/DetailsItem";
import { connect } from "react-redux";



class ViewSelection extends Component {
    addPlan = () => {
        var index = this.props.currentindex
        var [...newUI]=this.props.UI
        newUI[index]="Search"
        this.props.addPlan(newUI)

    }
    render() {
    
        switch (this.props.UI[this.props.currentindex]) {
            case "DetailItem": {
                return (
                    <div>
                        <DetailItem viewIndex={this.props.viewIndex}/>
                    </div>)
            }
            case "Search": {
                return (
                    <div>
                       <Search viewIndex={this.props.viewIndex}/>
                    </div>)
            }
            case "Map": {
                return (
                    <div>
                        <MapView viewIndex={this.props.viewIndex}/>
                    </div>)
            }
            default:
                {
                    return (
                        <div>
                            <div>
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
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewSelection)

