import React, { Component } from 'react';
import { Row, Col, Affix } from 'antd';
import PlanItemView from "../PlanView/PlanItemView";
import ResultList from "../ResultList/ResultList";
import Search from "../Search/Search";
import DetailItem from "../Details/DetailsItem";
import { connect } from "react-redux";



class PlanViewDetail extends Component {
    state = {
    }
    render() {
        switch (this.props.PlanViewUI) {
            case "DetailItem": {
                return (
                    <div>
                    <DetailItem/>
                    </div>)
            }
            case "ResultList": {
                return (
                    <div>
                    <ResultList/>
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
