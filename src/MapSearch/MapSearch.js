import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import "./MapSearch.css";

/* global google */
class MapSearch extends Component {
    state = {
    }
    getGoogleMaps() {
        if (!this.googleMapsPromise) {
          this.googleMapsPromise = new Promise((resolve) => {
            window.resolveGoogleMapsPromise = () => {
            resolve(google);
            delete window.resolveGoogleMapsPromise;
            };
           const script = document.createElement("script");  
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA40IKC5vzBQA1HUNW1Y1OnfMQZZZ8gbpA&libraries=places&callback=initAutocomplete`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
          });
        }
        return this.googleMapsPromise;
      }

      componentWillMount() {
        this.getGoogleMaps();
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