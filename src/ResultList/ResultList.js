import React, { Component } from 'react';
import { Avatar, Row, Col, Card, Button, Popover, Icon, Divider, Collapse } from 'antd';
import "./ResultList.css"


const Panel = Collapse.Panel;
class ResultList extends Component {
    state = {
    }

    render() {
        const hoverContent = (
            <div>
                Add to your plan
            </div>
        );

        let resultList = null
        resultList =
            <Card className="listStyle" hoverable bodyStyle={{ padding: "0px", paddingLeft: 20 }} >
                <Row type="flex" align="middle">
                    <Col xs={4} sm={12} md={2} lg={2} xl={2}>
                        <Row type="flex" justify="start">
                            <Avatar alt="airline" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Scandinavian_Airlines_logo.svg/1200px-Scandinavian_Airlines_logo.svg.png" />
                        </Row>
                    </Col>
                    <Col xs={20} sm={12} md={9} lg={6} xl={7}>
                        <Row type="flex" justify="start" className="airLineStyle">
                            <h2 className="airLineStyle">Scandinavian Airlines</h2>
                        </Row>
                        <Row type="flex" justify="start" >
                            Airbus A321-100/200
                </Row>
                    </Col>
                    <Col xs={15} sm={12} md={4} lg={3} xl={2}>
                        <Row type="flex" justify="start">
                            <b className="timeStyle">17:50</b>
                        </Row>
                        <Row type="flex" justify="start" className="airportStyle">
                            <b>PEK</b>
                        </Row>
                    </Col>
                    <Col xs={9} sm={12} md={4} lg={4} xl={2}>
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

                    <Col xs={15} sm={12} md={4} lg={4} xl={5}>
                        <Row type="flex" justify="start">
                            <b className="timeStyle">18:50</b>
                        </Row>
                        <Row type="flex" justify="start" className="airportStyle">
                            <b>ARN</b>
                        </Row>
                    </Col>
                    <Col xs={9} sm={12} md={24} lg={5} xl={3}>
                        <Row type="flex" justify="start" className="airLineStyle">
                            <h2 className="airLineStyle"> Economy</h2>
                        </Row>
                        <Row type="flex" justify="start">
                            Lowest Price: <b className="priceStyle"> $1500 </b>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{ marginTop: "10px" }}>
                    <Divider style={{ margin: 0 }}><Icon type="double-right" rotate="90" /></Divider>
                </Row>
            </Card>

        return (
            <div>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22} >
                        <Collapse >
                            <Panel showArrow={false} header={resultList} key="1" className="customPanelStyle">
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} >
                        <Row type="flex" align="middle" style={{height:"auto"}}>
                            <Popover style={{ width: 500 }} content={hoverContent}>
                                <Button size="large" type="primary" shape="circle" icon="plus" />
                            </Popover>
                        </Row>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ResultList;