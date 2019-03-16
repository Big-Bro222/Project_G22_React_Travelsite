import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Layout, Menu } from 'antd';
import "./Homepage.css";

const {
    Header, Footer, Sider, Content,
} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Homepage extends Component {
    render() {
        return (
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header className="header">
                        <Menu mode="horizontal">
                            <Menu.Item>
                                One
                  </Menu.Item>
                            <Menu.Item disabled>
                                Navigation Two
                  </Menu.Item>
                            <SubMenu title={<span className="submenu-title-wrapper">Navigation Three - Submenu</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                        Header
                        </Header>
                    <Content className="content">Content
                  <Button className="primary">Hi</Button>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>


        );
    }
}

export default Homepage;