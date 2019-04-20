import React, { Component } from 'react';
import { Timeline, Card, PageHeader, Col, Row, Avatar,Divider } from 'antd';
import { connect } from "react-redux";
import "../ResultList/ResultList.css"


class PrintoutView extends Component {
    state = {}
    render() {
        const { timeline, currentindex, UI, savedFlight, savedPoint } = this.props;

        var timeLinePrint = timeline.map((day, i) => {
            if(savedFlight[i])
            var flightsPerDay = savedFlight[i].map((flight, i) =>
                (
                        <Row key = {i} type="flex" align="middle">
                            <Col xs={13} sm={12} md={2} lg={2} xl={2}>
                                <Row type="flex" justify="start">
                                    <Avatar alt="airline" src={flight.CarriersImg} />
                                </Row>
                            </Col>
                            <Col xs={11} sm={12} md={5} lg={4} xl={4}>
                                <Row type="flex" justify="start" className="airLineStyle">
                                    <h3 className="airLineStyle">{flight.CarriersName}</h3>
                                </Row>
                                <Row type="flex" justify="start" >
                                    {flight.FlightNumbers}
                                </Row>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={5} xl={7}>
                                <Row type="flex" justify="start">
                                    <b >{flight.Departure}</b>
                                </Row>
                                <Row type="flex" justify="start" >
                                    <b>{flight.OriginStation}</b>
                                </Row>
                            </Col>
                            <Col xs={24} sm={12} md={5} lg={3} xl={4}>
                                <br></br>
                                <Row type="flex" justify="start">
                                    {flight.Duration}
                                </Row>
                                <br></br>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={5} xl={7}>
                                <Row type="flex" justify="start">
                                    <b >{flight.Arrival}</b>
                                </Row>
                                <Row type="flex" justify="start">
                                    <b>{flight.DestinationStation}</b>
                                </Row>
                            </Col>
                        </Row>

                ))
                if(savedPoint[i])
            var pointsPerDay = savedPoint[i].map((point,i)=> 
            (
                <Row>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <b>{point.title}</b>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                    <p>{point.address}</p>
                    </Col>
                </Row>
            )) 

            return (
                <Timeline.Item key={i}>
                  <Card
                        key={i}
                        title={day}
                        bordered={false}
                        style={{ width: "90%" }}
                    >
                    {flightsPerDay}
                    <Divider/>
                    {pointsPerDay}
                    </Card>
                </Timeline.Item>
            )
        })


        return (
            <div>
                <Col span={2}></Col>
                <Col span={20}>
                <PageHeader
                onBack={() => this.props.changeView("timeline")}
                title="Your personal travel plan"
                subTitle = '"Ctrl+P" to print your plan'
                style ={{textAlign:"left"}}
            />
                <Timeline mode="alternate" >
                    {timeLinePrint}
                </Timeline>
                </Col>
                <Col span={2}></Col>
            
                
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { timeline, currentindex, UI, savedFlight, savedPoint } = state;
    return {
        timeline,
        currentindex,
        UI,
        savedFlight,
        savedPoint
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeView: (value) => {
            const action = { type: "CHANGE_VIEW", payload: value };
            dispatch(action);
            (console.log(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PrintoutView);