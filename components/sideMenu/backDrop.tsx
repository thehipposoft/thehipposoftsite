import React from "react";

const BackDrop = ({sideMenu, closeSideMenu}) => {
    return(
        <img
            src="/assets/close-menu.png"
            className={`${ sideMenu ? 'backdrop backdrop-open' : 'backdrop'}`}
            onClick={closeSideMenu}
        ></img>
    )
}

export default BackDrop