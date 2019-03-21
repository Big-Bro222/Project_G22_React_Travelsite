import React, { Component } from "react";
import './Search.css'
import ResultList from "../ResultList/ResultList";
import ClassPeople from "./ClassPeopleForm"



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="searchView">
                        <ClassPeople />
                </div>
                <div style={{ marginTop: "5%" }}>
                    <ResultList />
                </div>

            </div>
        )
    }
}
export default Search

/*******************************ClassPeople--&&--SearchLocation*************************************/

