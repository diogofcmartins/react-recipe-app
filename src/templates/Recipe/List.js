import React from "react";

class List extends React.Component {
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

        if (this.state.results.length > 0) {
            return (
                <div className={"container"}>
                    <h1>Results from search: {this.state.search}</h1>
                    {this.state.results.map((r, id) => (
                        <p key={id}>{r.recipe.label}</p>
                    ))}
                </div>
            );
        } else {
            return (
                <div className={"container"}>
                    <h1>No results found.</h1>
                </div>
            );
        }
    }
}

export default List;