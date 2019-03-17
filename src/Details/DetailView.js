import React, { Component } from 'react';
import {Row, Col} from 'antd';
import DetailItem from "./DetailsItem";
import Sidebar from "../Side/SideView";
import Navbar from "../Navbar/Navbar";

class DetailView extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <Row>
      <Col span={6}>
      <Sidebar/>
      </Col>
      <Col span={18}>
      <DetailItem/>
      </Col>
    </Row>
                
               
            </div>
         );
    }
}
 
export default DetailView;