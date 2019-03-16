import { Radio, Menu, Dropdown, Button, Icon, message } from 'antd';
import React, { Component } from 'react';
import QuickResultItem from "./QuickResultItem";

const RadioGroup = Radio.Group;

class QuickResult extends Component {
    state = {
        value: 1,
        title: "Flight",
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p><Dropdown overlay={<Menu onClick={this.handleMenuClick}>
                    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
                    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
                    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
                </Menu>}>
                    <Button style={{ marginLeft: 8 }}>
                        Button <Icon type="down" />
                    </Button>
                </Dropdown>
                </p>


                <RadioGroup onChange={this.onChange} value={this.state.value} buttonStyle="solid">
                <QuickResultItem/>
                <QuickResultItem/>
                <QuickResultItem/>
                </RadioGroup></div>
        );
    }
}

export default QuickResult;

