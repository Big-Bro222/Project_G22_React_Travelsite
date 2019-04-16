import React, { Component } from 'react';
import { Affix, Menu, Icon } from 'antd';
import "./Navbar.css";

class Navbar extends Component {
    state = {
        top: 0,
    }
    render() {
        return (
            <div>
                <header>
                    <Affix offsetTop={this.state.top}>
                        <Menu mode="horizontal" className="background">
                            <Menu.Item style={{ float: "left" }}>
                                <Icon type="smile" style={{color:"#ffffff"}} theme="filled" />
                            </Menu.Item>
                            <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer"><h1 style={{color:"#ffffff"}}><Icon type="rocket" theme="filled"/>TRIP PLANNER <Icon type="rocket" theme="filled" /></h1></a>
                            </Menu.Item>
                            <Menu.Item style={{ float: "right" }}>
                                <Icon type="dashboard" style={{color:"#ffffff"}} theme="filled" />
                            </Menu.Item>
                        </Menu>
                    </Affix>
                </header>
            </div>
        );
    }
}

export default Navbar;