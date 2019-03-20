import React, { Component } from 'react';
import PlanItemView from "../PlanView/PlanItemView";
import Search from "../Search/Search";
import DetailItem from "../Details/DetailsItem";
import { connect } from "react-redux";



class PlanViewDetail extends Component {
    state = {
    }
    render() {
        console.log()
        switch (this.props.UI) {
            case "DetailItem": {
                return (
                    <div>
                    <DetailItem/>
                    </div>)
            }
            case "PlanItemView": {
                return (
                    <div>

                    <PlanItemView/>
                    </div>)
            }
            default:
                {
                    return (
                    <div>
                    <Search/>
                    </div>)
                }
        }
    }
}
function mapStateToProps(state){
    return{
        departureplace:state.departureplace,
        PlanViewUI:state.PlanViewUI
    }
}


export default connect(mapStateToProps)(PlanViewDetail)
