import React  from 'react';
import HomepageSlider from "./HomepageSlider";
import HomepageBlock from "./HomepageBlock";

const Homepage = () => {
    return(
        <div className={"homepage"}>
            <HomepageSlider />
            <HomepageBlock />
        </div>
    )
}

export default Homepage;