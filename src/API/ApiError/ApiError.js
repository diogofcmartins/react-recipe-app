import React from "react";

const NoRecipe = (props) => {
    return (
        <div id={"api-error"}>API ERROR: {props.error}</div>
    );
}

export default NoRecipe;