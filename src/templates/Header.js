import React from "react";
import Logo from "../media/images/logo/logo.png"
import Search from "./Search/Search";

const Header = () => {
    return (
        <header>
            <div className={"header container-fluid"}>
                <div className={"logo-container"}>
                    <a href={"/"}>
                        <img src={Logo} alt={"FOOD RECIPES"}/>
                    </a>
                </div>
                <div className={"search"}>
                    <Search />
                </div>
            </div>
        </header>
    );
}

export default Header;