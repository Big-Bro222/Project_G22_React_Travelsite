import React, {
    Component
} from "react";
import {
    Form, InputNumber, Input, Radio, Button, DatePicker, Row, Col,} from 'antd';
import moment from "moment"
import './Search.css'


const ButtonGroup = Button.Group;


class searchView extends Component {
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

        return (
            <div >
                {/* <Navbar />
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
 */}

                <div className="searchView">
                    <Radio.Group className="radio_group" onChange={this.onRadioChange} defaultValue={this.state.radioValue} >
                        <Radio value="Return">Return</Radio>
                        <Radio value='One_way'>One way</Radio>
                    </Radio.Group>

                    <Form>
                        <Row type="flex" justify="start">
                            <Col span={7}>
                                <Row>
                                    <b className="typeStyle">FROM</b>
                                </Row>
                                <Row >
                                    <Form.Item >
                                        {getFieldDecorator('From', {
                                            rules: [{
                                                message: 'Please input your starting points',
                                            }],
                                        })(
                                            <Input size="large" allowClear placeholder="Country, city or airport" />
                                        )}
                                    </Form.Item>
                                </Row>
                            </Col>
                            <Col span={7}>
                                <Row>
                                    <b className="typeStyle">TO</b>
                                </Row>
                                <Row>
                                    <Form.Item >
                                        {getFieldDecorator('To', {
                                            rules: [{
                                                message: 'Please input your destination',
                                            }],
                                        })(
                                            <Input size="large" placeholder="Country, city or airport" />
                                        )}
                                    </Form.Item>
                                </Row>
                            </Col>
                            <Col span={5} >
                                <Row>
                                    <b className="typeStyle">DEPART</b>
                                </Row>
                                <Row>
                                    <Form.Item>
                                        {getFieldDecorator('Depart', {
                                            rules: [{
                                                type: 'object',
                                                message: 'Select date',
                                            }],
                                        })(
                                            <DatePicker size="large"
                                                disabledDate={this.disabledStartDate}
                                                format="DD-MM-YYYY"
                                                initialValue={startValue}
                                                onChange={this.onStartChange}
                                                onOpenChange={this.handleStartOpenChange}
                                            />
                                        )}
                                    </Form.Item>
                                </Row>
                            </Col>
                            <Col span={5}>
                                <Row>
                                    <b className="typeStyle">RETURN</b>
                                </Row>
                                <Row>
                                    <Form.Item >
                                        {getFieldDecorator('Return', {
                                            rules: [{
                                                type: 'object',
                                                message: 'Select date',
                                            }],
                                        })(
                                            <DatePicker size="large"
                                                disabledDate={this.disabledEndDate}
                                                format="DD-MM-YYYY"
                                                initialValue={endValue}
                                                onChange={this.onEndChange}
                                                open={endOpen}
                                                onOpenChange={this.handleEndOpenChange}
                                                disabled={this.state.disabled} />
                                        )}
                                    </Form.Item>
                                </Row>
                            </Col>
                        </Row>
                    </Form>




                <Row type="flex" justify="start">
                    <Col span={5} >
                        <Row>
                            <b className="typeStyle">Adult:(12+ yrs)</b>
                        </Row>
                        <Row>
                            <ButtonGroup>
                                <Button type="primary" icon="minus" />
                                <InputNumber style={{ marginTop: "2px" }} min={1} max={10} id='Adults' defaultValue={1} />
                                <Button type="primary" icon="plus" />
                            </ButtonGroup>
                        </Row>
                    </Col>
                    <Col span={5}  >
                        <Row>
                            <b className="typeStyle">Child:(2-11 yrs)</b>
                        </Row>
                        <Row>
                            <ButtonGroup>
                                <Button type="primary" icon="minus" />
                                <InputNumber style={{ marginTop: "2px" }} min={0} max={10} id='Children' defaultValue={0} />
                                <Button type="primary" icon="plus" />
                            </ButtonGroup>
                        </Row>
                    </Col>
                    <Col span={5} >
                        <Row>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Row>
                        
                    </Col>
                </Row>

            </div>
            </div >
        )
    }
}
const Search = Form.create({})(searchView);

export default Search