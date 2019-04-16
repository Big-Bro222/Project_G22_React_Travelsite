import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import "./MapSearch.css";


class MapSearch extends Component {
    state = {
    }

    
    
    render() {
        
        return (
            <div>
                <Row className="mapSearch">
                    <Col xs={24} sm={6} md={24} lg={10} xl={10} >
                    <Input id="pac-input" 
                           className="controls" 
                           size="large"
                           type="text" 
                           addonBefore="I want to find"  
                           placeholder="Input keywords like 'hotel'" 
                    />
                    </Col>
                    <Col xs={24} sm={6} md={24} lg={5} xl={5} >
                    <Button type="primary" htmlType="submit" size="large" icon="search" >Search</Button>
                    </Col>
                </Row>
                <div id="map"></div>
            </div>
        )
    }
}

export default MapSearch;