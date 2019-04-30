import React, { Component } from 'react';
import { Avatar, Row, Col, Card, Button, Popover, Icon, Collapse,Alert } from 'antd';
import "./ResultList.css"
import { timeConvert } from "../apiUtility/apiUtility"
import { connect } from 'react-redux'


const Panel = Collapse.Panel;
class ResultList extends Component {
    state = {
    }
    constructor(props) {
        super(props);

        this.savedFlight = [];

    }
    saveFlight = (e, flight) => {
        e.preventDefault();
        // this.savedFlight.push(flight);

        var trigger = true;
        // console.log(this.savedFlight.length)
        if (this.savedFlight.length <= 0) { trigger = true; }
        else {
            trigger = false;
        }
        if (this.props.savedFlight[this.props.currentindex] && this.props.savedFlight[this.props.currentindex].find(item => item.FlightId === flight.FlightId)) {

        }
        else {
            this.savedFlight.push(flight);



            var index = this.props.currentindex
            var [...newSaveFlight] = this.props.savedFlight;


            if (trigger) {
                if (newSaveFlight[index]) {
                    newSaveFlight[index] = newSaveFlight[index].concat(this.savedFlight);
                    if (this.props.savedFlight[index].length > 0) {
                        var [...currentSavedFlight] = newSaveFlight[index];
                        this.savedFlight = currentSavedFlight;
                    }
                }
                else {
                    newSaveFlight[index] = this.savedFlight;
                }
            }
            else { newSaveFlight[index] = this.savedFlight; }



            this.props.saveFlight(newSaveFlight)
        }
        //this.setState({UI:this.props.UI})
    }
    render() {
        // console.log("list")
        var resultList = null
        if (this.props.posts) {
            const { Itineraries, Legs, Places, Carriers } = this.props.posts;
            var flightInfomation = [];
            if(Itineraries.length===0){

resultList=(
            resultList =   (<Alert
            message="No search result,click submit again or change the search value"
            description="No search result currently. No worry! Try click submit again! It may be caused by API instability"
            type="info"
            showIcon
          />)
)
            }
            else{
            let Itinerary;
            for (Itinerary of Itineraries) {
                // eslint-disable-next-line no-loop-func
                var leg = Legs.find(leg => leg.Id === Itinerary.OutboundLegId);
                // eslint-disable-next-line no-loop-func
                var OriginStation = Places.find(place => place.Id === leg.OriginStation);
                // eslint-disable-next-line no-loop-func
                var DestinationStation = Places.find(place => place.Id === leg.DestinationStation);
                // eslint-disable-next-line no-loop-func
                var carrier = Carriers.find(carrier => carrier.Id === leg.Carriers[0]);
                var price = Itinerary.PricingOptions[0].Price;

                flightInfomation.push(Object.assign({},
                    {
                        "FlightId": Itinerary.OutboundLegId,
                        "FlightNumbers": carrier.DisplayCode + leg.FlightNumbers[0].FlightNumber,
                        "OriginStation": OriginStation.Name,
                        "DestinationStation": DestinationStation.Name,
                        "Departure": leg.Departure,
                        "Arrival": leg.Arrival,
                        "CarriersName": carrier.Name,
                        "CarriersImg": carrier.ImageUrl,
                        "price": price,
                        "BookingLink": Itinerary.PricingOptions[0].DeeplinkUrl,
                        "Duration": timeConvert(leg.Duration)
                    }
                ))
            }

            const addHoverContent = (
                <div>
                    Add to your plan
            </div>
            );
            const shopHoverContent = (
                <div>
                    Go To The Flight Website
            </div>
            );

    



            resultList = flightInfomation.map((flight, i) => (


                <Card key={i} className="listStyle" hoverable bodyStyle={{ padding: "0px", paddingLeft: 20 }} >
                    <Row type="flex" align="middle">
                        <Col xs={13} sm={12} md={2} lg={2} xl={2}>
                            <Row type="flex" justify="start">
                                <Avatar alt="airline" src={flight.CarriersImg} />
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
                        <Col xs={24} sm={12} md={6} lg={5} xl={5}>
                            <Row type="flex" justify="start">
                                <b >{flight.Departure}</b>
                            </Row>
                            <Row type="flex" justify="start" >
                                <b>{flight.OriginStation}</b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={5} lg={3} xl={5}>
                            <br></br>
                            <Row type="flex" justify="start">
                                {flight.Duration}
                            </Row>
                            <br></br>


                        </Col>

                        <Col xs={24} sm={12} md={6} lg={5} xl={5}>
                            <Row type="flex" justify="start">
                                <b >{flight.Arrival}</b>
                            </Row>
                            <Row type="flex" justify="start">
                                <b>{flight.DestinationStation}</b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={20} lg={3} xl={2}>
                            <Row type="flex" justify="start">
                                <b className="priceStyle"> ${flight.price} </b>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={4} lg={2} xl={2} >
                            <Row type="flex" justify="center">
                                <Popover style={{ width: 500 }} content={addHoverContent}>

                                    <Button onClick={(e) => this.saveFlight(e, flight)} size="large" type="primary" shape="circle" icon="plus" />

                                </Popover>
                                <Popover style={{ width: 500 }} content={shopHoverContent}>
                                    <a href={flight.BookingLink} target="_blank" rel="noopener noreferrer">
                                        <Icon type="shopping" /><Icon type="double-right" size="big" />
                                    </a>
                                </Popover>
                            </Row>
                        </Col>
                    </Row>
                </Card>


            ))
        }
        }
        else
       resultList=(<div></div>);



            return (


                <Panel showArrow={false} header={resultList} key="1" className="customPanelStyle">
                </Panel>

            )
        }
    }

function mapStateToProps(state) {
    const { savedFlight, currentindex } = state

    return {
        savedFlight,
        currentindex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveFlight: (value) => {
            const action = { type: "SAVE_FLIGHT", payload: value };
            dispatch(action);
            // (console.log(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
