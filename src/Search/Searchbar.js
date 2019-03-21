
import React, { Component } from "react";
import {
    Form, Input, Button, Row, Col, Select
} from 'antd';
import './Search.css'
import { connect } from 'react-redux'
import {
    fetchPostsIfNeeded
} from '../actions'

const Option = Select.Option;
class Searchbars extends Component {
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

    getFormValue = () => {
        var formData = this.props.form.getFieldsValue();
        return formData;

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onSearchSubmit(values.From)

            }

            //   console.log('Received values of form: ',  this.getFormValue());

        });
    }


    render() {
        const { onSearchSubmit } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
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
                                <Button size="small" type="primary" shape="circle" icon="minus" onClick={this.adultsMinusChange} />
                                {getFieldDecorator('adults', { initialValue: 1 })(
                                    <Input style={{ width: "40px" }} />)}
                                <Button size="small" type="primary" shape="circle" icon="plus" onClick={this.adultsPlusChange} />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={9} lg={8} xl={5}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <b className="typeStyle">Children(2-12)</b>
                                <Button size="small" type="primary" shape="circle" icon="minus" onClick={this.childrenMinusChange} />
                                {getFieldDecorator('children', { initialValue: 0 })(
                                    <Input style={{ width: "40px" }} />)}
                                <Button size="small" type="primary" shape="circle" icon="plus" onClick={this.childrenPlusChange} />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={7} lg={7} xl={4}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <b className="typeStyle">Infants</b>
                                <Button size="small" type="primary" shape="circle" icon="minus" onClick={this.infantsMinusChange} />
                                {getFieldDecorator('infants', { initialValue: 0 })(
                                    <Input style={{ width: "40px" }} />)}
                                <Button size="small" type="primary" shape="circle" icon="plus" onClick={this.infantsPlusChange} />
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
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
                    <Col xs={24} sm={12} md={2} lg={23} xl={3} >
                        <Row >
                            <Form.Item >
                                <Button type="primary" htmlType="submit" size="large" icon="right-circle" >Submit</Button>
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
            </Form>
        );
    }
}
const Searchbar = Form.create({ name: 'ClassPeople' })(Searchbars);


const mapDispatchToProps = (dispatch) => ({
    onSearchSubmit: (data) => dispatch(fetchPostsIfNeeded(data))
})

export default connect(mapDispatchToProps)(Searchbar)


// export default Searchbar




