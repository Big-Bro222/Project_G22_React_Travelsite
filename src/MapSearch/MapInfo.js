import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon, Avatar, Divider, Rate, Popover, Comment, Modal, List, Input, Form } from 'antd';
import "./MapSearch.css";
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';

class MapInfo extends Component {
    state = {
    }


    render() {
        return (
            <div className="infoView" id="infowindow-content" display ="inline" >
                        <Card
                            bordered = {false}
                            extra={<Button type="primary">Add</Button>}
                            //Place Name
                            title={<span id="place-name"></span>}
                            headStyle={{ padding: "0px", fontSize: "25px", position:"sticky"}}
                            bodyStyle={{ padding: "0px" }}
                            size="small"
                            className="cardStyle"
                            //Place Image
                            cover={<img id="place-icon" src="" />}
                        >

                            <div className="colorDiv" >
                                <h5 className="h4Style" id = "place-type"> </h5>
                                {/* <Rate id= "place-rate" disabled allowHalf value={3.5} /> */}
                            </div>
                            <div className="div2Style" >
                            <Row className="rowStyle">
                                <Col span={4}>
                                <Avatar size="small" icon="environment" className="avatarStyle" />  </Col>
                                <Col span = {20}>
                                <div id="place-address">Place Address</div>
                                </Col>
                                </Row>
                                <Row className="rowStyle">
                                <Col span={4}>
                                <Avatar size="small" icon="phone" className="avatarStyle" />  </Col>
                                <Col span = {20}>
                                <div id="place-tel">telnumber</div>
                                </Col>
                                </Row>
                                <Row className="rowStyle">
                                <Col span={4}>
                                <Avatar size="small" icon="schedule" className="avatarStyle" />  </Col>
                                <Col span = {20}>
                                <div id="place-openingHour">openingHour</div>
                                </Col>
                               
                                
                            </Row>
                               
                            </div>
                            

                        </Card>

            </div>

        )
    }
}

export default MapInfo;