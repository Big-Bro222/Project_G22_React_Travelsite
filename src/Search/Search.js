import React, {
    Component
} from "react";
import {
    Form, InputNumber, Input, Radio, Button, DatePicker, Row, Col, Select
} from 'antd';
import moment from "moment"
import './Search.css'
import { connect } from "react-redux";

const ButtonGroup = Button.Group;
const Option = Select.Option;


class searchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
            disabled: false,
            radioValue: "Return",
            adults: 3,
            children: 0,
            infants: 0,
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
    adultsMinusChange = () => {
        var adults = this.state.adults;
        if (adults > 1) {
            this.setState({ adults: adults - 1 });
        }
    }
    adultsPlusChange = () => {
        var adults = this.state.adults;
        this.setState({ adults: adults + 1 });
    }
    childrenMinusChange = () => {
        var children = this.state.children;
        if (children >= 1) {
            this.setState({ children: children - 1 });
        }
        console.log(this.state.children)
    }
    childrenPlusChange = () => {
        var children = this.state.children;
        this.setState({ children: children + 1 });
    }
    infantsMinusChange = () => {
        var infants = this.state.infants;
        if (infants >= 1) {
            this.setState({ infants: infants - 1 });
        }
    }
    infantsPlusChange = () => {
        var infants = this.state.infants;
        this.setState({ infants: infants + 1 });
    }



    render() {

        const { getFieldDecorator } = this.props.form;
        const { startValue, endValue, endOpen } = this.state;

        return (
            <div className="searchView">
                <div>
                    <Row type="flex" justify="center">
                        <Col span={4}>
                            <Select defaultValue="One Way" style={{ width: 120 }} >
                                <Option value="One Way">One Way</Option>
                                <Option value="Return">Return</Option>
                            </Select>
                        </Col>

                        <Col span={15}>

                            <Row>
                                <Col span={10}>

                                    <Select defaultValue="Economy" style={{ width: 120 }} >
                                        <Option value="Economy">Economy</Option>
                                        <Option value="Premium Economy">Premium Economy</Option>
                                        <Option value="Business Class">Business Class</Option>
                                        <Option value="First Class">First Class</Option>
                                    </Select>

                                </Col>
                            </Row>
                            <Row>
                                <Col span={5}>
                                    Adults(12+)
                                </Col>
                                <Col span={5}>
                                    <Button type="primary" shape="circle" icon="minus" onClick={this.adultsMinusChange} />

                                    <Input style={{ width: "40px" }} value={this.state.adults} />

                                    <Button type="primary" shape="circle" icon="plus" onClick={this.adultsPlusChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={5}>
                                    Children(2-11)
                                    </Col>
                                <Col span={5}>
                                    <Button type="primary" shape="circle" icon="minus" onClick={this.childrenMinusChange} />

                                    <Input defaultValue="0" style={{ width: "40px" }} value={this.state.children} />

                                    <Button type="primary" shape="circle" icon="plus" onClick={this.childrenPlusChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={5}>
                                    Infants
                                    </Col>
                                <Col span={5}>
                                    <Button type="primary" shape="circle" icon="minus" onClick={this.infantsMinusChange} />

                                    <Input defaultValue="0" style={{ width: "40px" }} value={this.state.infants} />

                                    <Button type="primary" shape="circle" icon="plus" onClick={this.infantsPlusChange} />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>


                <div>
                    <Form>
                        <Row type="flex" justify="center">
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
                                <Button type="primary" htmlType="submit"onClick={this.props.onChangedeparture}>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div >
        )
    }
}
const Search = Form.create({})(searchView);
function mapStateToProps(state){
    return{
        PlanViewUI:state.PlanViewUI
    }
}

function mapDispatchToProps(dispatch){
    return {
        onChangedeparture:()=>{
        const action={type:"SEARCH",payload:'DetailItem'};
        dispatch(action);
        (console.log("button clicked"))}
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
