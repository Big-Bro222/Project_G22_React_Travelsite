import React, { Component } from 'react';
import { Menu, Icon, Button, Col } from 'antd';
import "./SideView.css"
import { connect } from "react-redux";

// import {
//     Button
// } from 'antd';

const SubMenu = Menu.SubMenu;

class SideView extends Component {
    // rootSubmenuKeys = ['sub1', 'sub2'];
    constructor(props){
        super(props);
        this.deleteFlight = this.deleteFlight.bind(this);
     }
    state = {
        // openKeys: ['sub1'],
    }

    // onOpenChange = (openKeys) => {
    //     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    //     if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //       this.setState({ openKeys });
    //     } else {
    //       this.setState({
    //         openKeys: latestOpenKey ? [latestOpenKey] : [],
    //       });
    //     }
    //   }

    deleteFlight = ( e,flightNumber) => {
       e.preventDefault();  
        console.log("click")
        function checkPoint(element) {
            return element.FlightNumbers ===flightNumber;
          }
          var [...currentSavedFlight] = this.props.savedFlight;
          var index = this.props.currentindex;
    
          if (this.props.savedFlight[this.props.currentindex].find(item => item.FlightNumbers === flightNumber)) {
    
            var currentArray = this.props.savedFlight[this.props.currentindex];
            let i = currentArray.findIndex(checkPoint);
            currentSavedFlight[index].splice(i, 1);
          }
    
          this.props.deleteFlight(currentSavedFlight);

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
                case "sub3":
                    this.props.changeView("printoutView")
                    break;
                default:
                // console.log(newUI)
                // console.log(this.props.UI)

            }

        }
    }
    render() {
        if (this.props.savedPoint) {
            if (this.props.savedFlight[this.props.currentindex] && this.props.savedFlight[this.props.currentindex].length > 0)
                var sidePointList = this.props.savedPoint[this.props.currentindex].map((point, i) => {
                    if (i === 0) { return null; }
                    return (<Menu.Item  key={i}>{point.title}</Menu.Item>)
                });
        }
        if (this.props.savedFlight) {
            if (this.props.savedFlight[this.props.currentindex])
                var sideFlightList = this.props.savedFlight[this.props.currentindex].map((flight, i) => {
                    if (i === 0) { return null; }
                    return (<Menu.Item  key={i}>
                        <Col span={20}>
                            {flight.CarriersName + "  " + flight.FlightNumbers}
                        </Col>
                        <Col span={4}>
                            <Button shape="circle"onClick={e=>  this.deleteFlight(e, flight.FlightNumbers) } > <Icon type="minus" style={{ textAlign: "center" }} /></Button>
                        </Col>


                        {/* <Icon type="close-circle" /> */}
                    </Menu.Item>)
                });
        }

        return (
            <Menu
                // openKeys={['sub1','sub2']}
                selectedKeys={['sub1']}
                defaultOpenKeys={['sub1']}
                selectable={true}
                mode="inline"
            >
                <SubMenu key="sub1" onTitleClick={this.handleClick} title={<span><Icon type="rocket" /><span>Add Flight Tickets</span></span>}>
                    <Menu.Divider style={{ margin: "0" }}></Menu.Divider>
                    {sideFlightList}
                </SubMenu>

                <SubMenu key="sub2" onTitleClick={this.handleClick} title={<span><Icon type="environment" /><span>Mark Spot in Map</span></span>}>
                    <Menu.Divider style={{ margin: "0" }}></Menu.Divider>
                    {sidePointList}
                </SubMenu>

                <SubMenu key="sub3" onTitleClick={this.handleClick} title={<span><Icon type="export" /><span>Save my plan</span></span>}>
                    <Menu.Divider style={{ margin: "0" }}></Menu.Divider>
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
        savedPoint: state.savedPoint,
        savedFlight: state.savedFlight
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePlan: (value) => {
            const action = { type: "CHANGE_PLAN", payload: value };
            dispatch(action);
            // (console.log(value))
        },
        changeView: (value) => {
            const action = { type: "CHANGE_VIEW", payload: value };
            dispatch(action);
            // (console.log(value))
        },
        deleteFlight: (value) => {
            const action = { type: "DELETE_FLIGHT", payload: value };
            dispatch(action);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideView)
