import React from "react";
import SideBar from "./SideBar";
import StoreContext from "../../StoreContext";

const SideBarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return <SideBar friends={state.sideBar.friends}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default SideBarContainer;