import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import "./SideView.css"
import { connect } from "react-redux";


class SideView extends Component {
    state = {
        value: 1,
    }

    handleClick = (e) => {
        console.log('map click ', e);



        var index = this.props.currentindex
        //Notice: here to use [...] to deep copy the array;
        var [...newUI] = this.props.UI
        if (newUI[index] !== "Startview") {

            switch (e.key) {
                case "1":

                    newUI[index] = "Search"
                    this.props.changePlan(newUI)
                    //this.setState({ UI: this.props.UI })
                    // console.log(newUI)
                    // console.log(this.props.UI)
                    break;
                case "2":
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
