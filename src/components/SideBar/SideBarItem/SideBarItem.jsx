import React from "react";
// import classes from './../SideBar.module.css';
import {NavLink} from "react-router-dom";
import MyAvatar from "../../Profile/MyAvatar/MyAvatar";

const SideBarItem = (props) => {
    debugger
    let path = '/sidebar/' + props.id;
    return (<div>
        <MyAvatar/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
export default SideBarItem;