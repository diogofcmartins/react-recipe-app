import React, {useState, useEffect} from "react";
import {fetchData} from "../../API/api-connect";
import {Redirect} from "react-router-dom";
import Recipe from "../../Recipe";

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function getSearch() {
            const data = await fetchData(search);
            setRecipes(data.hits);
            if (data.hits.length > 0) {
                setSuccess(true);
                setSearched(search);
                console.log(searched);
                setSearch("");
                document.getElementById("search-error").style.display = "none";
            }
        }

        getSearch();


    }, [query]);


    const checkFetch = () => {
        console.log(recipes);
        console.log(recipes.length);

    }

    const updateSearch = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const searchValue = e => {
        e.preventDefault();

        if (search !== "") {
            setQuery(search);
        }


    }

    return (
        <div id={"recipe-search-input"}>
            <form onSubmit={searchValue} className={"search-form"}>
                <input
                    type={"text"}
                    value={search}
                    onChange={updateSearch}
                />
                <button type={"submit"}>Search</button>
                <div id={"search-error"}>No results found.</div>
            </form>
            {console.log(recipes)}
            {success === true &&
            <Redirect to={{
                pathname: '/results',
                state: {results: recipes, search: searched}
            }}/>
            }
        </div>
    );
}

export default Search;