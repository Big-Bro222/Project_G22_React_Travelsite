import React, { Component } from 'react';
import { Menu, Icon, Affix, Divider } from 'antd';
import "./SideView.css"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class SideView extends Component {
    state = {
        openKeys: ['sub1'],
    }

    rootSubmenuKeys = ['sub1', 'sub2'];
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
      }
    render() {
        return (
            <Affix>
                <Menu 
                 className="menu"
                 defaultSelectedKeys={['1']}
                 defaultOpenKeys={['sub1']}
                 mode="inline"
                 openKeys={this.state.openKeys}
                 onOpenChange={this.onOpenChange}
      >
        <SubMenu key="sub1" title={<h3><Icon type="rocket" /><span>Flight</span></h3>}>
            <Divider style={{margin:0}}></Divider>
            <Menu.Item key="1">Add Your Flight<Icon type="edit" /></Menu.Item>
        </SubMenu>
        <Divider style={{margin:0}}></Divider>
        <SubMenu key="sub2" title={<h3><Icon type="branches" /><span>Routes</span></h3>}>
            <Divider style={{margin:0}}></Divider>
            <Menu.Item key="2">Edit Your Trip<Icon type="edit" /></Menu.Item>    
        </SubMenu>
      </Menu>
            </Affix>
        );
    }
}

export default SideView;