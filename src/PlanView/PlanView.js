import React, { Component } from 'react';
import { Row, Col,Affix } from 'antd';
import SideView from "../Side/SideView";
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";
import PlanViewDetail from "../PlanViewDetail/PlanViewDetail";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class PlanView extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0 };
      }
    componentWillMount() {
        this.data  =  <PlanViewDetail/>;
        // <PlanItemView/>;
    }
    render() {
        return (
            <div>
                <div>{this.props.departureplace}</div>
                <Navbar/>
                
                
                <Row>
                    <Col span={2} />
                    <Col span={22}>
                    <Timeline content={this.data}/>
                    </Col>
                </Row>
                <Affix style={{ position: 'absolute', top:"50%"}}>
                <SideView/>
                </Affix>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        departureplace:state.departureplace,
        component:state.component
    }
}


export default connect(mapStateToProps)(PlanView)
