
import React, { Component } from "react";
import {
    Form, Input, Button, Row, Col, Select, Affix
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
            <Affix offsetTop={20}>
                <Form onSubmit={this.handleSubmit}>
                <Row >
                    <Col xs={21} sm={18} md={17} lg={9} xl={10} >
                        <Row >
                            <Form.Item >
                                <b className="typeStyle">FROM</b>
                                {getFieldDecorator('From', { rules: [{ message: 'Please input your starting points', }], })(
                                    <Input size="large" allowClear placeholder="Input IATA code,eg. ARN for Arlanda airport" style={{ width: "80%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={2} sm={4} md={2} lg={2} xl={1}>
                        <Row  type="flex" justify="start">
                            <Form.Item>
                                <Button shape="round" icon="swap" size="large"></Button>
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={20} sm={18} md={17} lg={10} xl={10} style={{ marginLeft: "-2%" }}>
                        <Row >
                            <Form.Item >
                                <b className="typeStyle">TO</b>
                                {getFieldDecorator('To', { rules: [{ message: 'Please input your destination', }], })(
                                    <Input size="large" allowClear placeholder="Input IATA code,eg. LAX for LosAngeles airport" style={{ width: "85%" }} />)}
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={24} sm={6} md={2} lg={3} xl={3} >
                        <Row  >
                            <Form.Item >
                                <Button type="primary" htmlType="submit" size="large" icon="right-circle" >Submit</Button>
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
            </Form>
            </Affix>
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




