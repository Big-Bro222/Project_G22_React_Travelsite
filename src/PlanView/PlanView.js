import React, { Component } from 'react';
import { Row, Col,Alert } from 'antd';
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import ViewSelection from "../ViewSelection/ViewSelection"
import PrintoutView from "../PrintoutView/PrintoutView"

class PlanView extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }
  giveContent = () => {
    
    var len = this.props.timeline.length;
    var Content = [];
    for (var i = 0; i <= len - 1; i++) {
      Content.push({ date: this.props.timeline[i], content: <ViewSelection UI={this.props.UI[i]} viewIndex={i}/> });
    }
    return Content;
 
  }

  componentWillMount() {
    if(this.props.timeline&&this.props.timeline.length>0)
    {
    this.data = this.giveContent().map((view, index) => {
      return ({
        date: view.date,
        component: (
          <div key={index}>
            {view.content}
          </div>
        )
      });
    });
  }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.timeline&&this.props.timeline.length>0)
    {
    if (nextProps !== this.props) {
      this.data = this.giveContent().map((view, index) => {
        return ({
          date: view.date,
          component: (
            <div key={index}>
              {view.content}
            </div>
          )
        });
      });
    }
  }
  }
  render() {
    var mainView;
    if(this.props.timeline.length>0)
    {
    switch (this.props.currentView) {
      case "timeline": {
        mainView = (
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Timeline content={this.data} />
            </Col>
          </Row>
        )
        break;
      }
      case "printoutView": {
        mainView = (
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <PrintoutView />
            </Col>
          </Row>)
          break;
      }
      default:{
        mainView = (
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Timeline content={this.data} />
            </Col>
          </Row>
        )
      }
    }
  }
  else mainView=(   <Alert
    message="There is no timeline now"
    description="Please create your timeline first and save it"
    type="info"
  />)
        
        return (
          <div>
    

            <Navbar />


            {mainView}


          </div>
        );
    }
  }



function mapStateToProps(state) {
  return {

    timeline: state.timeline,
    UI: state.UI,
    currentindex: state.currentindex,
    currentView: state.currentView
  }
}

export default connect(mapStateToProps)(PlanView)
