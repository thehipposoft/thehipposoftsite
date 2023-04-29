import React from "react";

const BackDrop = ({sideMenu, closeSideMenu}) => {
    return(
        <div 
        className={`${ sideMenu ? 'backdrop backdrop-open' : 'backdrop'}`}
        onClick={closeSideMenu}
        >X</div>
    )
}

export default BackDrop