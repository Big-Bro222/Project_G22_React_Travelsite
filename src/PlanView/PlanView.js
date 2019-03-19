import React, { Component } from 'react';
import { Row, Col,Affix } from 'antd';
import SideView from "../Side/SideView";
import Timeline from "../Timeline/Timeline";
import Navbar from "../Navbar/Navbar";
import Content from "./PlanViewContent";

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
                <Navbar/>
                
                
                <Row>
                    <Col span={2} />
                    <Col span={20}>
                    <Timeline content={this.data}/>
                    </Col>
                    <Col span={2}/>
                </Row>
                <Affix style={{ position: 'absolute', top:"50%"}}>
                <SideView/>
                </Affix>
            </div>
        );
    }
}

export default PlanView;