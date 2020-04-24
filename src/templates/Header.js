import React from "react";
import Logo from "../media/images/logo/logo.png"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Header = () => {
    return (
            <header>
                <div className={"header container-fluid"}>
                    <div className={"logo-container"}>
                        <a href={"/"}>
                            <img src={Logo} alt={"FOOD RECIPES"}/>
                        </a>
                    </div>
                </div>
            </header>
    );
}

export default Header;