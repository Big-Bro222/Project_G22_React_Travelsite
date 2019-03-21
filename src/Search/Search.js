import React, { Component } from "react";
import './Search.css'
import ResultList from "../ResultList/ResultList";
import Searchbar from "./Searchbar"
import { connect } from 'react-redux'
import {
  fetchPostsIfNeeded
} from '../actions'



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
                <div className="searchView"

                // onSearchSubmit={this.handleSubmit}

                >
                        <Searchbar />
                </div>
                {isFetching &&  <h2>Loading...</h2>}
                {!(posts instanceof Array)&&(<div style={{ marginTop: "5%" }}>
                {/* <ResultListPlaceHoder/> */}
                    <ResultList posts = {posts} lastTetchTime={lastUpdated}/>
                </div>)
                }
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

