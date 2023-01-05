// import React from "react";
import SideBar from "./SideBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

export default connect(mapStateToProps)(SideBar);
