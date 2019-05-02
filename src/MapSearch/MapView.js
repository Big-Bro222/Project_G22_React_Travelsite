import React, { Component } from "react";
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import SideView from "../Side/SideView";
import MapApi from "./MapApi"



class mapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0
        }
    }

    handleSubmit(formData) {
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={5} xl={4}>
                        <div >
                            <SideView />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={1} lg={1} xl={1}>
                    </Col>
                    <Col xs={24} sm={24} md={15} lg={18} xl={19}>

                        <div>
                            <MapApi viewIndex={this.props.viewIndex}/>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
function mapStateToProps(state) {
    const { isFetching, lastUpdated, items: posts,currentindex } = state || {
        isFetching: true,
        items: []
    }

    return {
        posts,
        isFetching,
        lastUpdated,
        currentindex
    }
}

export default connect(mapStateToProps)(mapView)


