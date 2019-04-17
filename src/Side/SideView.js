import React, { Component } from 'react';
import { Menu, Icon, Button, Divider, } from 'antd';
import "./SideView.css"
import { connect } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SideView extends Component {
    state = {
      
    }
    handleClick = (e) => {
      console.log('click ', e);
    }
    render() {
        return (
          <Menu
          className="menu"
          onClick={this.handleClick}
          // defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="rocket" /><span>Add Flight Tickets</span></span>}>
          <Divider style={{margin:"0"}}></Divider>     
              {/* <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>    */}
          </SubMenu>
          
          <SubMenu key="sub2" title={<span><Icon type="environment" /><span>Mark Spot in Map</span></span>}>
          <Divider  style={{margin:"0"}}></Divider>
            <Menu.Item key="3">Option 5</Menu.Item>
            <Menu.Item key="4">Option 6</Menu.Item>         
          </SubMenu>
        </Menu>
        );
    }
}

function mapStateToProps(state) {
    return {
        timeline: state.timeline,
        currentindex: state.currentindex,
        UI: state.UI
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePlan: (value) => {
            const action = { type: "CHANGE_PLAN", payload: value };
            dispatch(action);
            (console.log(value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideView)
