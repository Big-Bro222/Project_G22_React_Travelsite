import React, { Component } from 'react';
import { Affix, Menu, Icon, Button, Tooltip } from 'antd';
import "./Navbar.css";
import { Link } from "react-router-dom";

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
                            <Tooltip placement="bottomRight" title={"Made by ZY ZXY QZ LRZ with Love"}>
                                <Icon type="smile" style={{ color: "#ffffff" }} theme="filled" />
                                </Tooltip>
                            </Menu.Item>
                            <Menu.Item style={{ float: "right" }}>
                                <Tooltip placement="bottomLeft" title={"Click to sign out"}>
                                    <Link  to="/">
                                        <Button type="primary" icon="logout" />
                                    </Link>
                                </Tooltip>

                            </Menu.Item>
                        </Menu>
                    </Affix>
                </header>
            </div>
        );
    }
}

export default Navbar;