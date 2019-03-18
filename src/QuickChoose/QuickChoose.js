
import React, {
    Component
} from "react";
import 'antd/dist/antd.css';
import './QuickChoose.css';
import Sidebar from "../Side/SideView";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search"
import { Card, Icon, Collapse, Rate, List, Avatar, Row, Col } from 'antd';

const { Meta } = Card;
const Panel = Collapse.Panel;

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);





class QuickChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel_name: "XXX Hotel",
            hotel_description: "This is hotel description >>>"

        }
    }




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
                <Navbar />
                <Row>
                    <Col span={6}>
                        <Sidebar />
                    </Col>
                    <Col span={18}>
                        <Search/>
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                >
                                    {<div>
                                        <Row>
                                            <Col span={2}>
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
                                            <Col span={3}>
                                                <Row>
                                                    <b>17:50</b>
                                                </Row>
                                                <Row>
                                                    <b>airport</b>
                                                </Row>
                                            </Col>
                                            <Col span={3}>
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
                                            <Col span={4}>
                                                <Row>
                                                    <b>1500</b>
                                                </Row>
                                            </Col>

                                        </Row>
                                    </div>}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>


            </div>

        );
    }
}

export default QuickChoose;          