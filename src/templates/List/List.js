import React from "react";
import Search from "../Search/Search";
import Recipe from "../../Recipe";
class List extends React.Component {
    //  alert(items);
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            search: ''
        }
    }

    render() {
        this.state.results = this.props.location.state.results;
        this.state.search = this.props.location.state.search;
        return (
            <div className={"container"}>
                <h1>Results from search: {this.state.search}</h1>
                {this.state.results.map((r, id) => (
                    <p key={id}>{r.recipe.label}</p>
                ))}
            </div>
        );
    }
}

export default List;