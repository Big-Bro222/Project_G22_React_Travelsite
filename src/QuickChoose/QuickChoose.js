import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import QuickResult from "../QuickResult/QuickResult";
import Navbar from "../Navbar/Navbar";
import "./QuickChoose.css";



class QuickChoose extends Component {
    state = {
       
    }

    render() {

        return (
            <div>
                <Navbar/>
                <p> Quick Choose View</p>
                <Row type="flex" justify="center">
                    <Col span={7} className="defaultBack">
                        <QuickResult/>
                    </Col>
                    <Col span={7} className="defaultBackMid">
                    <QuickResult/>
                    </Col>
                    <Col span={7} className="defaultBack">
                    <QuickResult/>
                    </Col>
                </Row>
                    <Button className = "ButtonBack">
                        <Icon type="left" />
          </Button>
                    <Button type="primary" className = "ButtonNext">
                        Next
                    </Button>
            </div>
        );
    }
}

export default QuickChoose;
