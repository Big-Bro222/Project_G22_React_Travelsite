
import React, { Component } from "react";
import {
    Form,  Button, Row, Col,
} from 'antd';
import './Search.css'
import { connect } from 'react-redux'
import {
    fetchPostsIfNeeded
} from '../actions'
// import {AirportInput} from'airport-autocomplete-js'

// const Option = Select.Option;
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
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         // console.log('Received values of form: ', values);
        //         this.props.onSearchSubmit(values)

        //     }

        //     //   console.log('Received values of form: ',  this.getFormValue());

        // });
        var fromIATA="";
        var toIATA="";
        var regex = /[A-Z]{3}/g;
        fromIATA = document.getElementById(this.fromInputId).value.match(regex);
        toIATA = document.getElementById(this.toInputId).value.match(regex);
        var values = {"From":fromIATA,
    "To":toIATA};
        this.props.onSearchSubmit(values);

    }

    handleSwap = (e) => {
        e.preventDefault();
        var departure = document.getElementById(this.fromInputId).value;
        var arrvie = document.getElementById(this.toInputId).value;
        if (departure && arrvie)
        document.getElementById(this.fromInputId).value=arrvie;
        document.getElementById(this.toInputId).value=departure;

        // this.props.form.setFieldsValue({
        //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        //   });


    }

    componentDidMount() {
    
        var options = {
            formatting: `<div class="$(unique-result)"
                         single-result" 
                         data-index="$(i)"> 
                       $(IATA) </div>`
        };
        // console.log(this.fromInputId)
        if (this.props.viewIndex === this.props.currentindex) {
            // eslint-disable-next-line no-undef
            AirportInput(this.fromInputId, options);
            // eslint-disable-next-line no-undef
            AirportInput(this.toInputId, options);
        }
    }





    render() {

       this.fromInputId = "fromInputId" + this.props.viewIndex;
       this.toInputId = "toInputId" + this.props.viewIndex;
        // const { onSearchSubmit } = this.props;
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Row style={{ width: "100%" }}>
                    <Col xs={22} sm={18} md={21} lg={20} xl={10} >
                        <Row >
                        <input type="text" id={this.fromInputId} className="inp" placeholder="Flight from" style={{ width: "85%" }}></input>
                            {/* <Form.Item >
                                {getFieldDecorator('From', { rules: [{ message: 'Please input your starting points', }], })(
                                    <Input  addonBefore="From" size="large" allowClear placeholder="Input IATA code,eg. ARN for Arlanda airport" style={{ width: "85%" }} />)}
                            </Form.Item> */}
                        </Row>
                    </Col>
                    <Col xs={2} sm={4} md={2} lg={4} xl={1}>
                        <Row type="flex" justify="start">
                            <Form.Item>
                                <Button shape="round" icon="swap" size="large" onClick={(e) => this.handleSwap(e)}></Button>
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col xs={22} sm={18} md={21} lg={20} xl={10} >
                        <Row >
                        <input type="text" id={this.toInputId} className="inp" placeholder="To" style={{ width: "85%" }}></input>

                            {/* <Form.Item >
                                {getFieldDecorator('To', { rules: [{ message: 'Please input your destination', }], })(
                                    <Input id={this.toInputId} addonBefore="To" size="large" allowClear placeholder="Input IATA code,eg. LAX for LosAngeles airport" style={{ width: "85%" }} />)}
                            </Form.Item> */}
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
         
            </div>
        );
    }
}
const Searchbar = Form.create({ name: 'FlightSearch' })(Searchbars);


const mapDispatchToProps = (dispatch) => ({
    onSearchSubmit: (data) => dispatch(fetchPostsIfNeeded(data))
})

function mapStateToProps(state) {
    const { currentindex } = state

    return {
        currentindex
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)





