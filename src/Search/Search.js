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
        return (
            <div>
                <div className="searchView"

                // onSearchSubmit={this.handleSubmit}

                >
                        <Searchbar />
                </div>
                {isFetching &&  <h2>Loading...</h2>}
                <div style={{ marginTop: "5%" }}>
                    <ResultList fetchResult = {posts} lastTetchTime={lastUpdated}/>
                </div>

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

