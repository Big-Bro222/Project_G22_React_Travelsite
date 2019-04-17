
import React, { Component } from "react";
import {
    Form, Input, Button, Row, Col, Select,
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

    getFormValue = () => {
        var formData = this.props.form.getFieldsValue();
        return formData;

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onSearchSubmit(values)

            }

            //   console.log('Received values of form: ',  this.getFormValue());

        });
    }


    render() {
        const { onSearchSubmit } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
                <Form   onSubmit={this.handleSubmit}>
                <Row >
                    <Col xs={22} sm={18} md={21} lg={20} xl={10} >
                        <Row >
                            <Form.Item >
                                {getFieldDecorator('From', { rules: [{ message: 'Please input your starting points', }], })(
                                    <Input addonBefore="From" size="large" allowClear placeholder="Input IATA code,eg. ARN for Arlanda airport" style={{ width: "85%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={2} sm={4} md={2} lg={4} xl={1}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <Button shape="round" icon="swap" size="large"></Button>
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={22} sm={18} md={21} lg={20} xl={10} >
                        <Row >
                            <Form.Item >
                                {getFieldDecorator('To', { rules: [{ message: 'Please input your destination', }], })(
                                    <Input addonBefore="To" size="large" allowClear placeholder="Input IATA code,eg. LAX for LosAngeles airport" style={{ width: "85%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={6} md={24} lg={24} xl={3} >
                        <Row  >
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
const mapStateToProps=()=>({});

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar)


// export default Searchbar




