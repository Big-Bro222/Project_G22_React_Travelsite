import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import "./SideView.css"


class SideView extends Component {
    state = {
        value: 1,
    }

    handleClick = (e) => {
        console.log('click ', e);
    }


    render() {
        return (
            <div className="menu">
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    mode="vertical-left"
                >
                    <Menu.Item key="1"><Icon type="rocket" /></Menu.Item>
                    <Menu.Item key="2"><Icon type="home" /></Menu.Item>
                </Menu>

            </div>
        );
    }
}

export default SideView;