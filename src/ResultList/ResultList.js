import React, { Component } from 'react';
import { Avatar, Row, Col, Card, Button, Popover, Icon, Divider, Collapse } from 'antd';
import "./ResultList.css"
import {timeConvert} from "../apiUtility/apiUtility"


const Panel = Collapse.Panel;
class ResultList extends Component {
    state = {
    }

    render() {
        console.log("list")

        const { Itineraries, Legs, Places, Carriers } = this.props.posts;
        var flightInfomation = [];
        let Itinerary;
        for (Itinerary of Itineraries) {
            var leg = Legs.find(leg => leg.Id == Itinerary.OutboundLegId);
            var OriginStation = Places.find(place => place.Id == leg.OriginStation);
            var DestinationStation = Places.find(place => place.Id == leg.DestinationStation);
            var carrier = Carriers.find(carrier => carrier.Id == leg.Carriers[0]);
            var price = Itinerary.PricingOptions[0].Price;

            flightInfomation.push(Object.assign({},
                {
                    "FlightId": Itinerary.OutboundLegId,
                    "FlightNumbers":carrier.DisplayCode+leg.FlightNumbers[0].FlightNumber,
                    "OriginStation": OriginStation.Name,
                    "DestinationStation": DestinationStation.Name,
                    "Departure": leg.Departure,
                    "Arrival": leg.Arrival,
                    "CarriersName": carrier.Name,
                    "CarriersImg": carrier.ImageUrl,
                    "price":price,
                    "BookingLink":Itinerary.PricingOptions[0].DeeplinkUrl,
                    "Duration":timeConvert(leg.Duration)
                }
            ))
        }

        const hoverContent = (
            <div>
                Add to your plan
            </div>
        );

        let resultList = null



        resultList = flightInfomation.map((flight, i) => (
      

                <Card key={i} className="listStyle" hoverable bodyStyle={{ padding: "0px", paddingLeft: 20 }} >
                    <Row type="flex" align="middle">
                        <Col xs={13} sm={12} md={2} lg={2} xl={2}>
                            <Row type="flex" justify="start">
                                <Avatar alt="airline" src={flight.CarriersImg}/>
                            </Row>
                        </Col>
                        <Col xs={11} sm={12} md={5} lg={4} xl={3}>
                            <Row type="flex" justify="start" className="airLineStyle">
                                <h2 className="airLineStyle">{flight.CarriersName}</h2>
                            </Row>
                            <Row type="flex" justify="start" >
                                {flight.FlightNumbers}
</Row>
                        </Col>
                        <Col xs={24} sm={11} md={6} lg={4} xl={3}>
                            <Row type="flex" justify="start">
                                <b >{flight.Departure}</b>
                            </Row>
                            <Row type="flex" justify="start" >
                                <b>{flight.OriginStation}</b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={5} lg={3} xl={5}>
                            <Row type="flex" justify="center">
                                {flight.Duration}
</Row>
                            <Row type="flex" justify="center">
                                <Icon type="minus" /><Icon type="minus" /><Icon theme="twoTone" type="rocket" rotate="90" /><Icon type="minus" /><Icon type="minus" />
                            </Row>
                        </Col>

                        <Col xs={24} sm={12} md={6} lg={5} xl={5}>
                            <Row type="flex" justify="start">
                                <b >{flight.Arrival}</b>
                            </Row>
                            <Row type="flex" justify="start">
                                <b>{flight.DestinationStation}</b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={20} lg={4} xl={3}>
                            <Row type="flex" justify="start" className="airLineStyle">
                                <h2 className="airLineStyle"> Economy</h2>
                            </Row>
                            <Row type="flex" justify="start">
                                Lowest Price: <b className="priceStyle"> ${flight.price} </b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={4} lg={2} xl={2} >
                            <Row type="flex" justify="end">
                                <Popover style={{ width: 500 }} content={hoverContent}>
                                <a href={flight.BookingLink} target="_blank" rel="noopener noreferrer">
                                    <Button size="large" type="primary" shape="circle" icon="plus" />
                                    </a>
                                </Popover>
                            </Row>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{ marginTop: "10px" }}>
                        <Divider style={{ margin: 0 }}><Icon type="double-right" rotate="90" /></Divider>
                    </Row>
                </Card>
         

        ))



        return (

            
                <Panel showArrow={false} header={resultList} key="1" className="customPanelStyle">
                </Panel>
            
        )
    }
}

export default ResultList;