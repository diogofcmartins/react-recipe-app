import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    const apiId = process.env.REACT_APP_API_ID;
    const apiKey = process.env.REACT_APP_API_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
            const data = await response.json();
            console.log(data);
            setRecipes(data.hits);
        }

        fetchData();
    }, [query]);

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

            <FontAwesomeIcon icon={faHome} />

            <form onSubmit={getSearch} className={"search-form"}>
                <input
                    type={"text"}
                    value={search}
                    onChange={updateSearch}
                />
                <button type={"submit"}>Search</button>
            </form>
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                />
            ))}
        </div>
    );
}

export default App;
