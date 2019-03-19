import React, {
    Component
} from "react";
import 'antd/dist/antd.css';
import { Button, DatePicker, Row, Col, Carousel,
} from 'antd';
import moment from "moment"
import './Welcome.css'
import Navbar from "../Navbar/Navbar"




class Welcome extends Component {
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


    disabledStartDate = (current) => {
        if (this.state.endValue === null) {
            return current && current < moment().endOf('day');
        }
        else {
            if ((current > this.state.endValue) && (current < moment.endOf('day')))
                return current
        }
    }

    disabledEndDate = (endValue) => {
        if (this.state.startValue) {
            return endValue && endValue < moment().endOf('day');
        }
        else {
            return endValue && endValue > this.state.startValue;
        }


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
        const { startValue, endValue, endOpen } = this.state;

        return (
            <div >
                <Navbar />
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>

                <div className="divBack">
                    <Row type="flex" justify="center" align="middle" gutter={{xs:8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={7}>
                            <h3>DEPARTURE</h3>
                            <DatePicker className="datePicker"
                                size="large"
                                disabledDate={this.disabledStartDate}
                                format="DD-MM-YYYY"
                                initialValue={startValue}
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                        </Col>
                        <Col span={7}>
                        <h3>RETURN</h3>
                            <DatePicker className="datePicker"
                                size="large"
                                disabledDate={this.disabledEndDate}
                                format="DD-MM-YYYY"
                                initialValue={endValue}
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle" className="buttonStyle">
                    <Col span={4}>
                        <Button size="large" type="primary" htmlType="submit" href="/planview" block>Start</Button>
                    </Col>
                    </Row>
                </div>
                </div>
        )
    }
}


export default Welcome