import React, { Component } from 'react';
import {Row, Col,Divider, Button,Icon} from 'antd';
import Navbar from "../Navbar/Navbar";
import PaymentItem from "./PaymentItem/PaymentItem";
import "./Payment.css";

class Payment extends Component {
    state = {
        total: 1234,
    }
    render() {
        return (
            <div>
                <Navbar />
                <Row type="flex" justify="center">
                    <Col span={7} className="defaultBack">
                    <PaymentItem/>
                    </Col>
                    <Col span={7} className="defaultBackMid">
                    <PaymentItem/>
                    </Col>
                    <Col span={7} className="defaultBack">
                    <PaymentItem/>
                    </Col>
                </Row>

            <Divider/>
            <h4>Total: {this.state.total} sek</h4>
            <Button className = "ButtonBack">
                        <Icon type="left" />
          </Button>
                    <Button type="primary" className = "ButtonNext">
                        Pay
                    </Button>
    
            </div>
        );
    }
}

export default Payment;