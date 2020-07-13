import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Redirect, Link, withRouter} from 'react-router-dom';
import Recipe from "../../Recipe";

class Search extends React.Component {
    constructor(props) {
        super(props);
        const responseData = [];
        this.updateSearch = this.updateSearch.bind(this);
        this.getSearch = this.getSearch.bind(this);
        this.state = {
            query: '',
            search: '',
            recipes: '',
            success: false,
            apiId: process.env.REACT_APP_API_ID,
            apiKey: process.env.REACT_APP_API_KEY
        }
        /* const [recipes, setRecipes] = useState([]);
         const [search, setSearch] = useState("");
         const [query, setQuery] = useState("");
 *//*
        const getData = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
                async function fetchData() {
                    const response = await fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${apiId}&app_key=${apiKey}`);
                    const data = await response.json();
                    console.log(data);
                    this.setState({recipes: this.push(data)});
                }

                fetchData();
            }, [this.state.query]);
        }*/
    }


    updateSearch = e => {
        this.setState({search: e.target.value});
    }

    getSearch = e => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${this.state.apiId}&app_key=${this.state.apiKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                        success: true,
                    });
                },
                (error) => {
                    console.log(`Error: ${error}`);
                }
            )

       // console.log(this.state.items)

    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.getSearch} id={"search-recipe"}>
                    <input type={"text"}
                           value={this.state.search}
                           onChange={this.updateSearch}
                           placeholder={"Search Recipe"}
                    />
                    <button type={"submit"}>{"Search"}</button>
                </form>
                {this.state.success === true &&
                <Redirect to={{
                    pathname: '/results',
                    state: {results: this.state.items}
                }}/>
                    /*<Link to={"/results"}>{this.state.items}</Link>*/
                }
            </React.Fragment>
        );
    }
}

export default withRouter(Search);
