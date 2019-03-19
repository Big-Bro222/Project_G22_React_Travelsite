import React, { Component } from 'react';
import { Avatar, Row, Col, Card, Divider, Button, Popover } from 'antd';
import "./ResultList.css"



class ResultList extends Component {
    state = {
    }

    render() {
        const hoverContent = (
            <div>
                Add to your plan
            </div>
        );

        return (
            <Card className="listStyle">
                <Row type="flex" align="middle">
                    <Col span={1}>
                        <Row type="flex" justify="start">
                            <Avatar alt="airline" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Scandinavian_Airlines_logo.svg/1200px-Scandinavian_Airlines_logo.svg.png" />
                        </Row>
                    </Col>
                    <Col span={5}>
                        <Row type="flex" justify="start" className="airLineStyle">
                            <h2 className="airLineStyle">Scandinavian Airlines</h2>
                        </Row>
                        <Row type="flex" justify="start" >
                            Airbus A321-100/200
                        </Row>
                    </Col>
                    <Col span={2}>
                        <Row type="flex" justify="start">
                            <b className="timeStyle">17:50</b>
                        </Row>
                        <Row type="flex" justify="start" className="airportStyle">
                            <b>PEK</b>
                        </Row>
                    </Col>
                    <Col span={2}>
                        <Row type="flex" justify="center">
                            8h10m
                        </Row>
                    </Col>

                    <Col span={3}>

                        <Row type="flex" justify="start">
                            <b className="timeStyle">18:50</b>
                        </Row>
                        <Row type="flex" justify="start" className="airportStyle">
                            <b>ARN</b>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <Row type="flex" justify="start" className="airLineStyle">
                            <h2 className="airLineStyle"> Economy</h2>
                        </Row>
                        <Row type="flex" justify="start">
                            Lowest Price: <b className="priceStyle"> $1500 </b>
                        </Row>
                    </Col>
                    <Divider type="vertical" style={{ height: "80px" }} />
                    <Col span={3}>
                        <Button shape="round" icon="down" size="large">View More</Button>
                    </Col>
                    <Col span={3} >
                        <Row type="flex" justify="end">
                            <Popover style={{ width: 500 }} content={hoverContent}>
                                <Button type="primary" shape="circle" icon="plus" />
                            </Popover>

                        </Row>
                    </Col>
                </Row>
            </Card>

        );
    }
}

export default ResultList;