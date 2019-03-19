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
import { connect } from "react-redux";
import { Link } from "react-router-dom";



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
        return current && current < moment().endOf('day');
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
        this.props.onChangedeparture(value._d.toISOString().slice(0,10));
        console.log(value)
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
        this.props.onChangereturn(value._d.toISOString().slice(0,10));
        console.log(value._d.toISOString())
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
                <div>{this.props.returndate}</div>
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
                        <Link to="/Planview">
                        <Button size="large" type="primary" htmlType="submit">Get Your Plan</Button>
                        </Link>
                    </Row>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        departuredate: state.departuredate,
        returndate:state.returndate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangedeparture: (value) => {
            const action = { type: "ON_CHANGE_DEPARTURE", payload: value };
            dispatch(action);
            (console.log("input"))
        },
        onChangereturn: (value) => {
            const action = { type: "ON_CHANGE_RETURN", payload: value };
            dispatch(action);
            (console.log("input2"))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
