import React, { Component } from 'react';
import { Row, Col,Affix } from 'antd';
import SideView from "../Side/SideView";
// import PlanItemView from "../PlanView/PlanItemView";
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";

class PlanView extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar/>
                <Affix style={{ position: 'absolute', top:"50%"}}>
                <SideView/>
                </Affix>
                
                <Row>
                    <Col span={2} />
                    <Col span={22}>
                    <Timeline/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PlanView;