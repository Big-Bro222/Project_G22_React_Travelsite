import React, { Component } from 'react';
import { Icon, Button, Col,List } from 'antd';
import "./SideView.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class SideView extends Component {
    constructor(props){
        super(props);
        this.deleteFlight = this.deleteFlight.bind(this);
     }
    state = {
    }

    deleteFlight = ( e,flightNumber) => {
       e.preventDefault();  
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
    handleClick = (e,key) => {
        e.preventDefault();
        var index = this.props.currentindex
        //Notice: here to use [...] to deep copy the array;
        var [...newUI] = this.props.UI
        if (newUI[index] !== "Startview") {

            switch (key) {
                case "sub1":

                    newUI[index] = "Search"
                    this.props.changePlan(newUI)
                    break;
                case "sub2":
                    newUI[index] = "Map"
                    this.props.changePlan(newUI)
                    break;
                case "sub3":
                    this.props.changeView("printoutView")
                    break;
                default:
            }

        }
    }
    render() {
        if (this.props.savedPoint) {
            if (this.props.savedFlight[this.props.currentindex] && this.props.savedFlight[this.props.currentindex].length > 0)
                var sidePointList = this.props.savedPoint[this.props.currentindex].map((point, i) => {
                    if (i === 0) { return null; }
                    return (<List.Item key={i} className = 'list' >{point.title}</List.Item>)
                });
        }
        if (this.props.savedFlight) {
            if (this.props.savedFlight[this.props.currentindex])
                var sideFlightList = this.props.savedFlight[this.props.currentindex].map((flight, i) => {
                    if (i === 0) { return null; }
                    return (<List.Item key={i} className = 'list'>
                            <Col span ={4}></Col>
                            <Col span={16}>
                            {flight.CarriersName + "  " + flight.FlightNumbers}</Col>
                            <Col span = {4} >
                            <Button shape="circle"onClick={e=>  this.deleteFlight(e, flight.FlightNumbers) } ><Col span={22}><Icon type="minus"  /></Col></Button>
                            </Col>
                    </List.Item>)
                });
        }

        return (
            <div>
                <span><Button key="sub1" size='large' block onClick={e=> this.handleClick(e,'sub1')}>
            <Icon type="rocket" style={{marginRight:'1%'}} /> Add Flight Tickets</Button>
            {sideFlightList}
            </span>
            <span><Button key="sub2" size='large' block onClick={e=> this.handleClick(e,'sub2')}>
            <Icon type="environment" style={{marginRight:'1%'}} /> Mark Spots in Map</Button>
            {sidePointList}
            </span>
            <span>
            <Button key="sub3" size='large' block onClick={e=> this.handleClick(e,'sub3')}>
            <Icon type="export" style={{marginRight:'1%'}} /> Save my plan</Button>
            </span>
            <span>
            <Link to="/App">
            <Button  size='large'  block>
            <Icon type="edit" style={{marginRight:'1%', paddingTop:'2%'}} /> Edit my timeline</Button></Link>
            </span>
            </div>
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
        },
        changeView: (value) => {
            const action = { type: "CHANGE_VIEW", payload: value };
            dispatch(action);
        },
        deleteFlight: (value) => {
            const action = { type: "DELETE_FLIGHT", payload: value };
            dispatch(action);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideView)
