import React, {
    Component
} from "react";
import 'antd/dist/antd.css';
import {
    Form, Button, DatePicker, Row, Col, Carousel,
} from 'antd';
import moment from "moment"
import './Welcome.css'
import Navbar from "../Navbar/Navbar"




class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            disabled: false,
            radioValue: "Return",
        }
    }

    disabledStartDate = (current) => {
        if (this.state.endValue === null) {
            return current && current < moment().endOf('day');
        }
        else {
            if ((current > this.state.endValue) && (current < moment.endOf('day')))
                return current
        }
    }

    disabledEndDate = (endValue) => {
        if (this.state.startValue) {
            return endValue && endValue < moment().endOf('day');
        }
        else {
            return endValue && endValue > this.state.startValue;
        }


    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (this.state.disabled !== true) {
            if (!open) {
                this.setState({ endOpen: true });
            }
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

    render() {
        const { startValue, endValue, endOpen } = this.state;

        return (
            <div >
                <Navbar />
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>

                <div className="searchView">
                    <Row type="flex" justify="start" align="middle">
                        <Col span={3} className="typeCol"><b className="typeStyle">DEPART</b></Col>
                        <Col span={8}>
                            <DatePicker className="datePicker"
                                size="large"
                                disabledDate={this.disabledStartDate}
                                format="DD-MM-YYYY"
                                initialValue={startValue}
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                        </Col>
                        <Col span={2} className="typeCol"><b className="typeStyle">TO</b></Col>
                        <Col span={8}  >
                            <DatePicker className="datePicker"
                                size="large"
                                disabledDate={this.disabledEndDate}
                                format="DD-MM-YYYY"
                                initialValue={endValue}
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle" className="buttonStyle">
                        <Button size="large" type="primary" htmlType="submit">Get Your Plan</Button>
                    </Row>
                </div>
            </div>
        )
    }
}


export default Welcome
