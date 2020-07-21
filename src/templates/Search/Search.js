import React, {useState, useEffect} from "react";
import {fetchData} from "../../API/api-connect";
import {Redirect} from "react-router-dom";

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState("");
    const [success, setSuccess] = useState(false);
    const [apiError, setApiError] = useState(false);
    useEffect(() => {
        async function getSearch() {
            const data = await fetchData(search);

            try {
                await setRecipes(data.hits);
                if (data.hits.length > 0) {
                    setSuccess(true);
                    setSearched(search);
                    setSearch("");
                }
            } catch (e) {
                console.log(e);
                setApiError(true);
            }
        }

        getSearch();

    }, [query]);

    const updateSearch = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const searchValue = e => {
        e.preventDefault();

        if (search !== "") {
            setRecipes([]);
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
            </form>

            {success === true &&
            <Redirect to={{
                pathname: '/recipe-list',
                state: {results: recipes, search: searched}
            }}/>
            }

            {apiError === true &&
            <Redirect to={{
                pathname: '/api-error'
            }}/>}
        </div>
    );
}

export default Search;