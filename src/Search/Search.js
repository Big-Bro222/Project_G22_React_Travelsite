import React, { Component } from "react";
import './Search.css'
import ResultList from "../ResultList/ResultList";
import Searchbar from "./Searchbar"
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import {
  fetchPostsIfNeeded
} from '../actions'
import SideView from "../Side/SideView";
import MapSearch from "../MapSearch/MapSearch"
import MapApi from "../MapSearch/MapApi"



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0
    }
  }

  handleSubmit(formData) {
    // e.preventDefault()

    // const { dispatch } = this.props
    console.log("formData" + formData)
    // dispatch(fetchPostsIfNeeded(formData))
  }

  render() {
    const { posts, isFetching, lastUpdated } = this.props
    console.log(posts.length)
    let ResultListPlaceHoder;
    // if(!(posts instanceof Array))
    // {
    // ResultListPlaceHoder = (<ResultList posts = {posts} lastTetchTime={lastUpdated}/>)
    // console.log("come to list")
    // }
    // else
    // ResultListPlaceHoder=(<div></div>)
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

                <Searchbar />
              </div>
            {isFetching && <h2>Loading...</h2>}
            {!(posts instanceof Array) && (
              <div>
                <ResultList posts={posts} lastTetchTime={lastUpdated} />
              </div>
            )}
            {/* <div>
              <MapApi/>
            </div> */}
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

/*******************************ClassPeople--&&--SearchLocation*************************************/

