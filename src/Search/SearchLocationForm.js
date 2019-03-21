import React, { Component } from "react";
import {
    Form, Input, Button, Row, Col
} from 'antd';
import './Search.css'


class SearchLocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Row justify="start">
                    <Col xs={21} sm={12} md={17} lg={11} xl={10} >
                        <Row >
                            <Form.Item >
                                <b className="typeStyle">From</b>
                                {getFieldDecorator('From', { rules: [{ message: 'Please input your starting points', }], })(
                                    <Input size="large" allowClear placeholder="Country, city or airport" style={{ width: "80%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={2} sm={12} md={2} lg={2} xl={1}>
                        <Row >
                            <Form.Item>
                                <Button shape="round" icon="swap" size="large"></Button>
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={17} lg={11} xl={10} style={{ marginLeft: "-2%" }}>
                        <Row >
                            <Form.Item >
                                <b className="typeStyle">TO</b>
                                {getFieldDecorator('To', { rules: [{ message: 'Please input your destination', }], })(
                                    <Input size="large" allowClear placeholder="Country, city or airport" style={{ width: "85%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={2} lg={23} xl={3}  style={{ marginLeft: "1%" }}>
                        <Row>
                            <Form.Item >
                                <Button type="primary" htmlType="submit" size="large" icon="right-circle">Submit</Button>
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
            </Form>);
    }
}
const SearchLocation = Form.create({ name: 'SearchLocation' })(SearchLocationForm);

export default SearchLocation