import React, {useEffect, useState} from "react";
import {fetchData} from "../../API/api-connect";
import {Redirect} from "react-router-dom";
import data from "./menu.json";

const Menu = () => {
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [apiError, setApiError] = useState(false);

   /* useEffect(() => {
        async function getSearch() {
            const data = await fetchData(search);

            try {
                await setRecipes(data.hits);
                if (data.hits.length > 0) {
                    setRedirect(true);
                    setSearched(search);
                    setSearch("");
                }
            } catch (e) {
                console.log(e);
                setApiError(true);
            }
        }

        getSearch();

    }, [search]);*/

    const searchValue = (value) => {
        setSearch(value);
    }

    return (
        <div id={"menu-wrapper"} className={"container"}>
            <div className={"row"}>
                {
                    data.map(i => (
                        <div className={"col-12 col-md-4"}>
                            <p key={i}>{i.title}</p>
                            {i.types.map(j => (
                                <span key={j} onClick={() => searchValue(j)}>{j}</span>
                            ))}
                        </div>
                    ))
                }
            </div>
            {redirect === true &&
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
    )
}

export default Menu;
