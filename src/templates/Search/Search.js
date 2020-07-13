import React, {Component, useState} from "react";

class Search extends Component {
    render() {
        return(
            <React.Fragment>
                <form id={"search-recipe"}>
                    <input type={"text"} placeholder={"Search Recipe"} />
                    <button type={"submit"}>Search</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Search;
