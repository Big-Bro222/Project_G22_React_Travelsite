import React, { Component } from "react";
import './Search.css'
import ResultList from "../ResultList/ResultList";
import Searchbar from "./Searchbar"
import { connect } from 'react-redux'
import { Row, Col,Spin } from 'antd'
import SideView from "../Side/SideView";



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0
    }
  }

  handleSubmit(formData) {

  }

  render() {
    const { posts, isFetching, lastUpdated } = this.props

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
          <Col xs={24} sm={24} md={15} lg={18} xl={18}>
          
              <div className="searchView">

                <Searchbar viewIndex={this.props.viewIndex}/>
              </div>
            {isFetching && <h2>Loading...</h2>}
            {isFetching && <Spin size="large" />}
            {!(posts instanceof Array) && (
              <div>
                <ResultList posts={posts} lastTetchTime={lastUpdated} />
              </div>
            )}
      
          </Col>
        </Row>
        
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { isFetching, lastUpdated, items: posts } = state || {
    isFetching: true,
    items: []
  }

  return {
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Search)

