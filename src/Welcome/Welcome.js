import React, {
    Component
} from "react";
import 'antd/dist/antd.css';
import {
     Button, DatePicker, Row, Col, Carousel,
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
        this.props.onChangedeparture(value._d.getTime());
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
        this.props.onChangereturn(value._d.getTime());
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

    // Use generateTimeLine to creat a default timeline and give the store state UI default values ["Startview",...]
    
    generateTimeLine = () => {
        var timeline=this.timeLinearr(this.props.departuredate,this.props.returndate)
        var UI=Array(timeline.length).fill("Startview")
        var savedPoint=Array(timeline.length).fill([])
        var savedFlight=Array(timeline.length).fill([])
        this.props.generateTimeLine(timeline,UI,savedPoint,savedFlight);
    }

    timeLinearr = (startdate, enddate) => {
        var datearray = [];
        for (var i = startdate; i <= enddate; i = i + 60 * 60 * 24 * 1000) {
            var ISO = new Date(i)
            var formatdate = ISO.toISOString().slice(0, 10);
            datearray.push(formatdate);
        }
        return datearray;
    }

    render() {
        const { startValue, endValue, endOpen } = this.state;
        console.log(this.props.departuredate)

        return (
            <div >
                {/* <div>{this.props.departuredate + "this.props." + this.props.returndate}</div> */}
                <Navbar />
                <Carousel autoplay>
                    <div style><img alt="1" src="http://cache.house.sina.com.cn/citylifehouse/citylife/9e/9d/20090606_21955_1.jpg"></img></div>
                    <div><img alt="2" src="http://cache.house.sina.com.cn/citylifehouse/citylife/9e/9d/20090606_21955_1.jpg"></img></div>
                </Carousel>

                <div className="welcomeView">
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
                            <Button size="large" type="primary" htmlType="submit" onClick={this.generateTimeLine}>Start Your Plan</Button>
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
        returndate: state.returndate,
        timeline: state.timeline
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
        },
        generateTimeLine: (timeline,UI,savedPoint,savedFlight) => {
            console.log(this.props)
            const action = {
                type: "GENERATE_TIME_LINE",
                timeline: timeline,
                UI: UI,
                savedPoint:savedPoint,
                savedFlight:savedFlight

                
            };
            dispatch(action);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
