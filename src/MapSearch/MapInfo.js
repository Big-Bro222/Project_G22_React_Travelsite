import React, { Component } from 'react';
import { Button, Row, Col, Img } from 'antd';
import "./MapSearch.css";

class MapInfo extends Component {
    state = {
    }
    
      
    render() {
        
        return (
            <div>
                <Row >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                     <Button icon="plus"></Button>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default MapInfo;