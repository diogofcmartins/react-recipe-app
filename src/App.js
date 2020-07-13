import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

//IMPORT STYLES
import './App.css';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
//IMPORT TEMPLATES
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Homepage from "./templates/Homepage/Homepage";
import List from "./templates/List/List";
import Recipe from "./Recipe";


function App() {
    const apiId = process.env.REACT_APP_API_ID;
    const apiKey = process.env.REACT_APP_API_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    /*useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
            const data = await response.json();
            console.log(data);
            setRecipes(data.hits);
        }

        fetchData();
    }, [query]);*/

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="App">
            <Header/>
            <main className={"main-content"}>
                <Switch>
                    <Route exact path={"/"} component={Homepage}/>
                    <Route path={"/results"} component={List}/>
                </Switch>
            </main>
            <Footer/>
            <form onSubmit={getSearch} className={"search-form"}>
                <input
                    type={"text"}
                    value={search}
                    onChange={updateSearch}
                />
                <button type={"submit"}>Search</button>
            </form>
        </div>
    );
}

export default App;
