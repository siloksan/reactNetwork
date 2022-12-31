import React from "react";
import classes from './SideBar.module.css'
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = (props) => {
    debugger
    let sideBarElements = props.state.sideBar.map(sb => (<SideBarItem name={sb.name} id={sb.id}/>))

    return (
        <div className={classes.content}>
            {sideBarElements}
        </div>
    )
}

export default SideBar;