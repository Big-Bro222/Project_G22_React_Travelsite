
import React, { Component } from "react";
import {
    Form, Input, Button, Row, Col, Select
} from 'antd';
import './Search.css'

const Option = Select.Option;
class ClassPeopleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    adultsMinusChange = () => {
        var adults = this.props.form.getFieldValue('adults')
        if (adults > 1) {
            var adult = adults - 1
            this.props.form.setFieldsValue({
                adults: adult,
            })
        }
    }
    adultsPlusChange = () => {
        var adults = this.props.form.getFieldValue('adults')
        var adult = adults + 1
        this.props.form.setFieldsValue({
            adults: adult,
        })
    }
    childrenMinusChange = () => {
        var children = this.props.form.getFieldValue('children')
        if (children >= 1) {
            var child = children - 1
            this.props.form.setFieldsValue({
                children: child,
            })
        }
    }
    childrenPlusChange = () => {
        var children = this.props.form.getFieldValue('children')
        var child = children + 1
        this.props.form.setFieldsValue({
            children: child,
        })
    }
    infantsMinusChange = () => {
        var infants = this.props.form.getFieldValue('infants')
        if (infants >= 1) {
            var infant = infants - 1
            this.props.form.setFieldsValue({
                infants: infant,
            })
        }
    }
    infantsPlusChange = () => {
        var infants = this.props.form.getFieldValue('infants')
        var infant = infants + 1
        this.props.form.setFieldsValue({
            infants: infant,
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Row >
                    <Col xs={10} sm={12} md={7} lg={6} xl={4}>
                        <Row justify="start">
                            <Form.Item>
                                <b className="typeStyle">Route</b>
                                {getFieldDecorator('route', { initialValue: 'One Way' })(
                                    <Select style={{ width: 110 }} >
                                        <Option value="One Way">One Way</Option>
                                        <Option value="Return">Return</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={10} sm={12} md={16} lg={10} xl={4}>
                        <Row justify="start">
                            <Form.Item>
                                <b className="typeStyle">Class</b>
                                {getFieldDecorator('class', { initialValue: 'Economy' })(
                                    <Select style={{ width: 150 }} >
                                        <Option value="Economy">Economy</Option>
                                        <Option value="Premium Economy">Premium Economy</Option>
                                        <Option value="Business Class">Business Class</Option>
                                        <Option value="First Class">First Class</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <b className="typeStyle">Adults(12+)</b>
                                <Button type="primary" shape="circle" icon="minus" onClick={this.adultsMinusChange} />
                                {getFieldDecorator('adults', { initialValue: 1 })(
                                    <Input style={{ width: "40px" }} />)}
                                <Button type="primary" shape="circle" icon="plus" onClick={this.adultsPlusChange} />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={9} lg={8} xl={5}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <b className="typeStyle">Children(2-12)</b>
                                <Button type="primary" shape="circle" icon="minus" onClick={this.childrenMinusChange} />
                                {getFieldDecorator('children', { initialValue: 0 })(
                                    <Input style={{ width: "40px" }} />)}
                                <Button type="primary" shape="circle" icon="plus" onClick={this.childrenPlusChange} />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={7} lg={7} xl={4}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <b className="typeStyle">Infants</b>
                                <Button type="primary" shape="circle" icon="minus" onClick={this.infantsMinusChange} />
                                {getFieldDecorator('infants', { initialValue: 0 })(
                                    <Input style={{ width: "40px" }} />)}
                                <Button type="primary" shape="circle" icon="plus" onClick={this.infantsPlusChange} />
                            </Form.Item>
                        </Row>
                    </Col>

                </Row>

            </Form>
        );
    }
}
const ClassPeople = Form.create({ name: 'ClassPeople' })(ClassPeopleForm);
export default ClassPeople



