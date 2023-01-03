import React from "react";
import SideBar from "./SideBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {friends: state.sideBar.friends}
}

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;