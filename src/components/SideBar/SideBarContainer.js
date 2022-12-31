import React from "react";
import SideBar from "./SideBar";

const SideBarContainer = (props) => {
    let state = props.store.getState();

    return <SideBar friends={state.sideBar.friends}/>
}

export default SideBarContainer;