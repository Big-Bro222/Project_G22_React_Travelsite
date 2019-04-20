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
                            <Menu.Item style={{ float: "right" }}>
                            <a href="" target="_blank" rel="noopener noreferrer"><Icon type="dashboard" style={{color:"#ffffff"}} theme="filled" /></a>
                            </Menu.Item>
                        </Menu>
                    </Affix>
                </header>
            </div>
        );
    }
}

export default Navbar;