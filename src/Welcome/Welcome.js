import React, {
    Component
} from "react";
import 'antd/dist/antd.css';
import {
    Button, DatePicker, Row, Col, Carousel, Popover
} from 'antd';
import moment from "moment"
import './Welcome.css'
import Navbar from "../Navbar/Navbar"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import img01 from "../imgs/01.jpg"
import img02 from "../imgs/02.jpg"
import firebase from 'firebase/app'
// import'firebase/firebase-database'
// import'firebase/firebase-auth'
// import {updateState,currentUID} from "../Firebase/FirebaseTool"

const toolTips = (
    <div>
        <p>Step 1: Choose your travel dates.</p>
        <p>Step 2: Explore flight or attractions and edit your daily travel plan.</p>
        <p>Step 3: Export your plan! Print it or save to share with friends!</p>
        <p>Step 4: Enjoy your journey! :P</p>
    </div>
);

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
        if (value) {
            this.onChange('startValue', value);
            this.props.onChangedeparture(value._d.getTime());
        }
        else{
            this.onChange('startValue', null);
        }
    }

    onEndChange = (value) => {
        if (value) {
            this.onChange('endValue', value);
            this.props.onChangereturn(value._d.getTime());
            // console.log(value._d.toISOString())
        }
        else{
            this.onChange('endValue', null);
        }
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

    updateData(value) {
        if (value.savedFlight) {

        }
        else {
            value.savedFlight = Array(value.timeline.length).fill([]);
        }
        if (value.savedPoint) {

        }
        else {
            value.savedPoint = Array(value.timeline.length).fill([]);
        }
        if (value.items) { }
        else {
            value.items = [];
        }
        this.props.getData(value);
        this.props.changeView("printoutView");
    }
    getData = () => {
        var myUserId = firebase.auth().currentUser.uid;
        var thisRef = this;
        firebase.database().ref('user-state/' + myUserId + '/state').once('value').then(function (snapshot) {

            return thisRef.updateData(snapshot.val())

        })
    }

    // changeView = (value) => {
    //     // e.preventDefault();

    // this.props.changeView(value)
    // }

    // Use generateTimeLine to creat a default timeline and give the store state UI default values ["Startview",...]

    generateTimeLine = () => {
        var timeline = this.timeLinearr(this.props.departuredate, this.props.returndate)
        var UI = Array(timeline.length).fill("Startview")
        var savedPoint = Array(timeline.length).fill(["placeHolder"])
        var savedFlight = Array(timeline.length).fill(["placeHolder"])
        this.props.generateTimeLine(timeline, UI, savedPoint, savedFlight);
        this.props.changeView("timeline");
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
 

        return (
            <div >
                {/* <div>{this.props.departuredate + "this.props." + this.props.returndate}</div> */}
                <Navbar />
                <Carousel autoplay>
                    <div><img alt="1" style={{ maxWidth: "100%" }} src={img01}></img></div>
                    <div><img alt="2" style={{ maxWidth: "100%" }} src={img02}></img></div>
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
                        <Col span={3}></Col>
                        <Col span ={3}>
                            <Popover content={toolTips} title="Four steps to create your personal travel plan">
                                <Button size='large'>First Time User? </Button>
                            </Popover>
                        </Col>
                        <Col span={12} ><Link to="/Planview">
                            <Button size="large" type="primary" htmlType="submit" disabled={!startValue||!endValue} onClick={this.generateTimeLine}>Start New Plan</Button>
                        </Link></Col>
                        <Col span={6} align="left">
                            <Link to="/Planview"><Button size="large" onClick={() => { this.getData() }} type="primary" ghost>My Previous Plan</Button></Link></Col>

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
            // (console.log("input"))
        },
        onChangereturn: (value) => {
            const action = { type: "ON_CHANGE_RETURN", payload: value };
            dispatch(action);
            // (console.log("input2"))
        },
        generateTimeLine: (timeline, UI, savedPoint, savedFlight) => {
            // console.log(this.props)
            const action = {
                type: "GENERATE_TIME_LINE",
                timeline: timeline,
                UI: UI,
                savedPoint: savedPoint,
                savedFlight: savedFlight


            };
            dispatch(action);
        },
        changeView: (value) => {
            const action = { type: "CHANGE_VIEW", payload: value };
            dispatch(action);
            // (console.log(value))
        },
        getData: (value) => {
            const action = {
                type: "GET_DATA", payload: value

            };
            dispatch(action);

        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
