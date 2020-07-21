import React from 'react';
import {Route, Switch} from "react-router-dom";

//IMPORT STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT TEMPLATES
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Homepage from "./templates/Homepage/Homepage";
import List from "./templates/Recipe/List";
import NoRecipe from "./templates/Recipe/NoRecipe"
import ApiError from "./API/ApiError/ApiError";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className={"main-content"}>
                <Switch>
                    <Route exact path={"/"} component={Homepage}/>
                    <Route path={"/recipe-list"} component={List}/>
                    <Route path={"/no-recipe"} component={NoRecipe}/>
                    <Route path={"/api-error"} component={ApiError}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
