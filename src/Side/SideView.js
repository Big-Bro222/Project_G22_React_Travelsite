import React, { Component } from 'react';
import { Menu, Icon, Button, Divider, } from 'antd';
import "./SideView.css"
import { connect } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SideView extends Component {
    rootSubmenuKeys = ['sub1', 'sub2'];
    state = {
        openKeys: ['sub1'],
    }

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

    handleClick = (e) => {
    
        var index = this.props.currentindex
        //Notice: here to use [...] to deep copy the array;
        var [...newUI] = this.props.UI
        if (newUI[index] !== "Startview") {

            switch (e.key) {
                case "sub1":

                    newUI[index] = "Search"
                    this.props.changePlan(newUI)
                    //this.setState({ UI: this.props.UI })
                    // console.log(newUI)
                    // console.log(this.props.UI)
                    break;
                case "sub2":
                    newUI[index] = "Map"
                    this.props.changePlan(newUI)
                    //this.setState({ UI: this.props.UI })
                    // console.log(newUI)
                    // console.log(this.props.UI)
                    break;
                default:
                    console.log(newUI)
                    console.log(this.props.UI)

            }

        }
    }
    render() {
        var sidePointList = this.props.savedPoint[this.props.currentindex].map((point, i) =>{
           return (<Menu.Item key={i}>{point.title}</Menu.Item>)
        });

        var sideFlightList = this.props.savedFlight[this.props.currentindex].map((flight,i) => {
            return(<Menu.Item key={i}>{flight.CarriersName+"  "+flight.FlightNumbers}</Menu.Item>)
        });

        return (
          <Menu
        //   className="menu"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        //   onClick={this.handleClick}
          // defaultSelectedKeys={['1']}
        //   defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" onTitleClick= {this.handleClick} title={<span><Icon type="rocket" /><span>Add Flight Tickets</span></span>}>
          <Divider style={{margin:"0"}}></Divider>    
          {sideFlightList} 
              {/* <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>    */}
          </SubMenu>
          
          <SubMenu key="sub2" onTitleClick= {this.handleClick} title={<span><Icon type="environment" /><span>Mark Spot in Map</span></span>}>
          <Divider  style={{margin:"0"}}></Divider>
          {sidePointList}
{/*           
            <Menu.Item key="3">Option 5</Menu.Item>
            <Menu.Item key="4">Option 6</Menu.Item>          */}
          </SubMenu>
        </Menu>
        );
    }
}

function mapStateToProps(state) {
    return {
        timeline: state.timeline,
        currentindex: state.currentindex,
        UI: state.UI,
        savedPoint:state.savedPoint,
        savedFlight:state.savedFlight
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
