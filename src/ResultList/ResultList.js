import React, { Component } from 'react';
import {  Icon, List, Avatar, Row, Col } from 'antd';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
class ResultList extends Component {
    state = {}
    render() {
        const listData = [];
        for (let i = 0; i < 3; i++) {
            listData.push({
                airlineLogos: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Scandinavian_Airlines_logo.svg/1200px-Scandinavian_Airlines_logo.svg.png",
                href: 'http://ant.design',
                title: 'Scandinavian Airlines',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }

        return (
            <div>

                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                >
                                    {<div style={{width:"100%"}}>
                                        <Row>
                                            <Col span={8}>
                                                <Row>
                                                    <Avatar src={item.airlineLogos} />
                                                </Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row>
                                                    <b>airlineName</b>
                                                </Row>
                                                <Row>
                                                    <b>airline Type</b>
                                                </Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row>
                                                    <b>17:50</b>
                                                </Row>
                                                <Row>
                                                    <b>airport</b>
                                                </Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row>
                                                    <b>18:50</b>
                                                </Row>
                                                <Row>
                                                    <b>airport</b>
                                                </Row>
                                            </Col>
                                            <Col span={1}>
                                                <b>$</b>
                                            </Col>
                                            <Col span={3}>
                                                <Row>
                                                    <b>1500</b>
                                                </Row>
                                            </Col>

                                        </Row>
                                    </div>}
                                </List.Item>
                            )}
                        />
            </div>

        );
    }
}

export default ResultList;