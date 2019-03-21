
import React, { Component } from "react";
import {
    Form, Input, Button, Row, Col, Select
} from 'antd';
import './Search.css'
import { connect } from "react-redux";
import { stat } from "fs";

const Option = Select.Option;
class Searchbars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filghtclass:"Economy"
        }
    }

    adultsMinusChange = () => {
        var adults = this.props.form.getFieldValue('adults')
        if (adults > 1) {
            var adult = adults - 1
            this.props.setadults(adult)
            this.props.form.setFieldsValue({
                adults: adult,
            })
        }
    }
    adultsPlusChange = () => {
        var adults = this.props.form.getFieldValue('adults')
        var adult = adults + 1
        this.props.setadults(adult)
        this.props.form.setFieldsValue({
            adults: adult,
        })
    }
    childrenMinusChange = () => {
        var children = this.props.form.getFieldValue('children')
        if (children >= 1) {
            var child = children - 1
            this.props.setchildren(child)
            this.props.form.setFieldsValue({
                children: child,
            })
        }
    }
    childrenPlusChange = () => {
        var children = this.props.form.getFieldValue('children')
        var child = children + 1
        this.props.setchildren(child)
        this.props.form.setFieldsValue({
            children: child,
        })
    }
    infantsMinusChange = () => {
        var infants = this.props.form.getFieldValue('infants')
        if (infants >= 1) {
            var infant = infants - 1
            this.props.setinfants(infant)
            this.props.form.setFieldsValue({
                infants: infant,
            })
        }
    }
    infantsPlusChange = () => {
        var infants = this.props.form.getFieldValue('infants')
        var infant = infants + 1
        this.props.setinfants(infant)
        this.props.form.setFieldsValue({
            infants: infant,
        })
    }
    setflightclass=()=>{
        var value=this.props.form.getFieldValue('class')
        this.props.setflightclass(value)
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
                                    <Select onChange={this.setflightclass}style={{ width: 150 }} >
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
                                {getFieldDecorator('adults', { initialValue: this.props.adults })(
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
                                {getFieldDecorator('children', { initialValue: this.props.children })(
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
                                {getFieldDecorator('infants', { initialValue: this.props.infants })(
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
                                    <Input size="large" allowClear placeholder="Country, city or airport" onChange={this.props.changeDeparturePlace} style={{ width: "80%" }} />)}
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
                                    <Input size="large" allowClear placeholder="Country, city or airport" onChange={this.props.changeReturnPlace} style={{ width: "85%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={12} md={2} lg={23} xl={3} >
                        <Row >
                            <div>{this.props.infants}</div>
                            <div>{this.props.children}</div>
                            <div>{this.props.adults}</div>
                            <div>{this.props.departureplace}</div>
                            <div>{this.props.returnplace}</div>
                            <div>{this.props.filghtclass}</div>
                            <div>{this.props.currentdate}</div>
                            <div>{this.props.departureplaces}</div>
                            <div>{this.props.UI}</div>

                            <Form.Item >
                                <Button type="primary" htmlType="submit" size="large" icon="right-circle">Submit{this.props.returnpalce}</Button>
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
            </Form>
        );
    }
}
const Searchbar = Form.create({ name: 'ClassPeople' })(Searchbars);


function mapStateToProps(state) {
    return {
        children: state.children,
        infants: state.infants,
        adults:state.adults,
        departureplace:state.departureplace,
        returnplace:state.returnplace,
        filghtclass:state.filghtclass,
        currentdate:state.currentdate,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setchildren: (value) => {
            const action = { type: "SET_CHILDREN", payload: value };
            dispatch(action);
        },
        setinfants: (value) => {
            const action = { type: "SET_INFANTS", payload: value };
            dispatch(action);
        },
        setadults: (value) => {
            const action = { type: "SET_ADULTS", payload: value };
            dispatch(action);
        },
        changeDeparturePlace: (e) => {
            const action = { type: "CHANGE_DEPARTURE_PLACE", payload: e.target.value };
            dispatch(action);
        },
        changeReturnPlace: (e) => {
            const action = { type: "CHANGE_RETURN_PLACE", payload: e.target.value };
            dispatch(action);
        },
        setflightclass: (value) => {
            const action = { type: "SET_FLIGHT_CLASS", payload: value };
            dispatch(action);
        },
        // setflightclass: (e) => {
        //     const action = { type: "SET_FLIGHT_CLASS", payload: e.target.value };
        //     dispatch(action);
        // },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)



