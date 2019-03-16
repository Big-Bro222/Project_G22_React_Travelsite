import React, { Component } from 'react';
import { Menu, Button, Icon } from 'antd';
import QuickResultItem from "../QuickResult/QuickResultItem";


class SideView extends Component {
    state = { 
        collapsed: false,
     }

     toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() { 
        return ( 
            <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <QuickResultItem/>
          </Menu.Item>
          <Menu.Item key="2">
          <QuickResultItem/>
          </Menu.Item>
          <Menu.Item key="3">
          <QuickResultItem/>
          </Menu.Item>
        </Menu>
      </div>
         );
    }
}
 
export default SideView;