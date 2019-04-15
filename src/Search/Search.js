import React, { Component } from "react";
import './Search.css'
import ResultList from "../ResultList/ResultList";
import Searchbar from "./Searchbar"
import { connect } from 'react-redux'
import {Row, Col} from 'antd'
import {
  fetchPostsIfNeeded
} from '../actions'
import SideView from "../Side/SideView";



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit(formData) {
        // e.preventDefault()
    
        // const { dispatch } = this.props
        console.log("formData"+formData)
        // dispatch(fetchPostsIfNeeded(formData))
      }

    render() {
        const {  posts, isFetching, lastUpdated } = this.props
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
                <Col span={5}>
                <SideView/>
                </Col>
                <Col span={19}>
                <div className="searchView"

// onSearchSubmit={this.handleSubmit}

>
        <Searchbar />
</div>
{isFetching &&  <h2>Loading...</h2>}
{!(posts instanceof Array)&&(<div>
{/* <ResultListPlaceHoder/> */}
    <ResultList posts = {posts} lastTetchTime={lastUpdated}/>
</div>)
}
                </Col>
              </Row>
               
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { isFetching, lastUpdated, items: posts } = state|| {
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

