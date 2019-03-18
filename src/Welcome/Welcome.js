import React, {
    Component
} from "react";
import 'antd/dist/antd.css';
import {
    Form, InputNumber, Input, Switch, Radio, Button, DatePicker, Row, Col,
} from 'antd';
import moment from "moment"
import './Welcome.css'
import { Link } from "react-router-dom";



class WelcomeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            disabled: false,
            radioValue: "Return",
        }
    }
    onRadioChange = (e) => {

        if (e.target.value === "Return") { this.setState({ disabled: false }) }
        else { this.setState({ disabled: true }) }
        this.setState({
            radioValue: e.target.value,
        });
    }

    disabledStartDate = (current) => {
        return current && current < moment().endOf('day');
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (this.state.disabled !== true) {
            if (!open) {
                this.setState({ endOpen: true });
            }
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { startValue, endValue, endOpen } = this.state;

        const colLayout_2 = {
            xs: { span: 24 },
            md: { span: 5 }
        }
        const colLayout_3 = {
            xs: { span: 24 },
            md: { span: 3 }
        }
        const colLayout_4 = {
            xs: { span: 24 },
            md: { span: 4 }
        }
        const buttonLayout = {
            xs: { span: 24 },
            md: { span: 10, offset: 12 }
        };

        return (
            <div>
                <Radio.Group onChange={this.onRadioChange} defaultValue={this.state.radioValue} >
                    <Radio value="Return">Return</Radio>
                    <Radio value='One_way'>One way</Radio>
                </Radio.Group>

                <Form >
                    <Row type="flex" justify="center" >
                        <Col {...colLayout_2}>
                            <Form.Item label="From" >
                                {getFieldDecorator('From', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your starting points',
                                    }],
                                })(
                                    <Input placeholder="Country, city or airport" />
                                )}
                            </Form.Item>
                        </Col>
                        <Col {...colLayout_2}>
                            <Form.Item label="To">
                                {getFieldDecorator('To', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your destination',
                                    }],
                                })(
                                    <Input placeholder="Country, city or airport" />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col {...colLayout_2}>
                            <Form.Item label="Depart" >
                                {getFieldDecorator('Depart', {
                                    rules: [{
                                        type: 'object',
                                        required: true,
                                        message: 'Select date',
                                    }],
                                })(
                                    <DatePicker
                                        disabledDate={this.disabledStartDate}
                                        format="DD-MM-YYYY"
                                        initialValue={startValue}
                                        onChange={this.onStartChange}
                                        onOpenChange={this.handleStartOpenChange}
                                    />
                                )}
                            </Form.Item>
                        </Col>
                        <Col {...colLayout_2}>
                            <Form.Item label="Return">
                                {getFieldDecorator('Return', {
                                    rules: [{
                                        type: 'object',
                                        required: true,
                                        message: 'Select date',
                                    }],
                                })(
                                    <DatePicker
                                        disabledDate={this.disabledEndDate}
                                        format="DD-MM-YYYY"
                                        initialValue={endValue}
                                        onChange={this.onEndChange}
                                        open={endOpen}
                                        onOpenChange={this.handleEndOpenChange}
                                        disabled={this.state.disabled} />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>

                <Row type="flex" justify="center">
                    <Col {...colLayout_3}>
                        <InputNumber min={1} max={10} id='Adults' defaultValue={1} />
                        <span > Adults</span>

                    </Col>
                    <Col {...colLayout_3} >
                        <span > Children</span>
                        <InputNumber min={0} max={10} id='Children' defaultValue={1} />


                    </Col>
                    <Col {...colLayout_4} >

                        Car Rental
                                <Switch />


                    </Col>
                </Row>
                <Row>
                    <Col {...buttonLayout}>
                        <Link to="/quickchoose">
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Link>
                    </Col>
                </Row>

            </div>
        )
    }
}
const Welcome = Form.create({})(WelcomeForm);

export default Welcome
