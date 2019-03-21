import React, { Component } from 'react';
import { Avatar, Row, Col, Card, Button, Popover, Icon, Divider, Collapse } from 'antd';
import "./ResultList.css"


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
                    "OriginStation": OriginStation.Name,
                    "DestinationStation": DestinationStation.Name,
                    "Departure": leg.Departure,
                    "Arrival": leg.Arrival,
                    "CarriersName": carrier.Name,
                    "CarriersImg": carrier.ImageUrl,
                    "price":price
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
            <div>

                {/* <div key={i} className="card mx-2" style={{ width: "18rem", float: "left" }}>
                    <img src={flight.CarriersImg} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-text text-center">{flight.CarriersName}</h4>
                        <p className="card-text" >{flight.OriginStation}</p>
                        <p className="card-text" >{"  ======>  "}</p>
                        <p className="card-text" >{flight.DestinationStation}</p>
                        <p className="card-text" >{"Departure time: " + flight.Departure}</p>
                        <p className="card-text" >{"Arrival time: " + flight.Arrival}</p>
                    </div>
                </div> */}

                <Card key={i} className="listStyle" hoverable bodyStyle={{ padding: "0px", paddingLeft: 20 }} >
                    <Row type="flex" align="middle">
                        <Col xs={24} sm={12} md={2} lg={2} xl={2}>
                            <Row type="flex" justify="start">
                                <Avatar alt="airline" src={flight.CarriersImg}/>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={9} lg={6} xl={7}>
                            <Row type="flex" justify="start" className="airLineStyle">
                                <h2 className="airLineStyle">{flight.CarriersName}</h2>
                            </Row>
                            <Row type="flex" justify="start" >
                                Airbus A321-100/200
</Row>
                        </Col>
                        <Col xs={24} sm={12} md={4} lg={3} xl={2}>
                            <Row type="flex" justify="start">
                                <b >{flight.Departure}</b>
                            </Row>
                            <Row type="flex" justify="start" className="airportStyle">
                                <b>{flight.OriginStation}</b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={4} lg={4} xl={2}>
                            <Row type="flex" justify="center">
                                8h10m
</Row>
                            <Row type="flex" justify="center">
                                <Icon type="minus" /><Icon type="minus" /><Icon type="rocket" rotate="90" /><Icon type="minus" /><Icon type="minus" />
                            </Row>
                            <Row type="flex" justify="center">
                                <b className="priceStyle">1 stop STD</b>
                            </Row>
                        </Col>

                        <Col xs={24} sm={12} md={4} lg={4} xl={5}>
                            <Row type="flex" justify="start">
                                <b >{flight.Arrival}</b>
                            </Row>
                            <Row type="flex" justify="start" className="airportStyle">
                                <b>{flight.DestinationStation}</b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={5} xl={3}>
                            <Row type="flex" justify="start" className="airLineStyle">
                                <h2 className="airLineStyle"> Economy</h2>
                            </Row>
                            <Row type="flex" justify="start">
                                Lowest Price: <b className="priceStyle"> ${flight.price} </b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={12} xl={2} >
                            <Row type="flex" justify="end">
                                <Popover style={{ width: 500 }} content={hoverContent}>
                                    <Button size="large" type="primary" shape="circle" icon="plus" />
                                </Popover>
                            </Row>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{ marginTop: "10px" }}>
                        <Divider style={{ margin: 0 }}><Icon type="double-right" rotate="90" /></Divider>
                    </Row>
                </Card>
            </div>

        ))



        return (

            <Collapse >
                <Panel showArrow={false} header={resultList} key="1" className="customPanelStyle">
                </Panel>
            </Collapse>
        )
    }
}

export default ResultList;