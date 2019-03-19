import React, { Component } from 'react';
import { Row, Col,Affix } from 'antd';
import SideView from "../Side/SideView";
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";
import Content from "./PlanViewContent";
import { connect } from "react-redux";
class PlanView extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0 };
      }
      componentWillMount() {
        this.data = Content.map((view, index) => {
          return ({
            date: view.date,
            component: (
              <div key={index}>
                { view.content}
              </div>
            )
          });
        });
      }

    render() {
        return (
            <div>
                <div>{this.props.departuredate+this.props.returndate}</div>
                <Navbar/>
                
                
                <Row>
                    <Col span={2} />
                    <Col span={22}>
                    <Timeline content={this.data}/>
                    </Col>
                </Row>
                <Affix style={{ position: 'absolute', top:"50%"}}>
                <SideView/>
                </Affix>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        departuredate: state.departuredate,
        returndate:state.returndate
    }
}

export default connect(mapStateToProps)(PlanView)
