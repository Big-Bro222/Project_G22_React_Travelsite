import React, { Component } from "react";
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
// import {
//     fetchPostsIfNeeded
// } from '../actions'
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
        // e.preventDefault()

        // const { dispatch } = this.props
        // console.log("formData" + formData)
        // dispatch(fetchPostsIfNeeded(formData))
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
                            <MapApi />
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


