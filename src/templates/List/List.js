import React from "react";


class List extends React.Component {
    //  alert(items);
    constructor(props) {
        super(props);
        console.log(this.props.location.state.results);
    }

    render() {
        return (
            <div className={"container"}>
                <h1>Results from search</h1>

            </div>
        );
    }
}

export default List;